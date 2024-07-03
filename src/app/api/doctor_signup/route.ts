import { NextResponse, NextRequest } from "next/server";
import connectToDatabase from "@/lib/db";
import Doctor from "@/models/Doctor";
import bcrypt from "bcrypt";
import neo4j from 'neo4j-driver';
import {SignJWT,jwtVerify} from 'jose'
import { cookies } from "next/headers";
const neo4jDriver = neo4j.driver('neo4j+s://23bdc3c3.databases.neo4j.io', neo4j.auth.basic('neo4j', 'T5lwo9j-acM7K8ry04pEd5IM50bZdWec4uLQZVSDEsM'));
const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);
export async function encrypt(payload:any) {
    return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(key)
}
export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  }
// Function to create a parent node with the provided Aadhar number
async function createParentNode(aadhar: string, phone_number: string, license: string,hashedAadhar:String) {
    const neo4jSession = neo4jDriver.session();

    try {
        const createParentNodeQuery = `CREATE (p:Doctor { g_id:$hashedAadhar,aadhar: $aadhar, phone_number: $phone_number , license:$license })`;
        await neo4jSession.run(createParentNodeQuery, { hashedAadhar,aadhar, phone_number , license });
        console.log('Doctor node created with Aadhar:', aadhar);
    } catch (error) {
        console.error('Error creating parent node in Neo4j:', error);
        throw error;
    } finally {
        neo4jSession.close();
    }
}


// Sign Up Handler
async function signUp(requestBody: { firstName: string, lastName: string, password: string, confirmPassword: string, phone: number, aadhar: string, license: string }) {
    try {
        let uri: string = process.env.MONGODB_URI as string;
        await connectToDatabase(uri);

        console.log("Signup function called with name:", requestBody.firstName);

        // Check if a user with the provided phone number already exists
          const existingUser = await Doctor.findOne({ phone: requestBody.phone , aadhar : requestBody.aadhar,license:requestBody.license });
          if (existingUser) {
            console.log("User with this phone number already exists:", existingUser._id);

            return { success: false, message: 'User already exists' , statusCode: 409 };
          } 


        // Creating the parent Node for the doctor
        
        const hashedAadhar = await bcrypt.hash(requestBody.aadhar, 12);
        await createParentNode(requestBody.aadhar, requestBody.phone.toString(), requestBody.license,hashedAadhar);
        // Create leaf node for the new user
        const newUser = new Doctor({
            firstName: requestBody.firstName,
            lastName: requestBody.lastName,
            phone: requestBody.phone,
            aadhar: requestBody.aadhar,
            password: await bcrypt.hash(requestBody.password, 10),
            license:requestBody.license,
            unique_key:hashedAadhar,
            graphDB_id:hashedAadhar
        });
        const savedUser = await newUser.save();
        const user = {
            firstName: requestBody.firstName,
            lastName: requestBody.lastName,
            phone: requestBody.phone,
            m_id:savedUser._id,
            g_id:hashedAadhar
        }
        
       const expires=new Date(Date.now()*10*10*60*1000);
       const session=await encrypt({user,expires});
       cookies().set('session',session,{expires,httpOnly:false})


        return { success: true, message: 'User signed up successfully',statusCode: 200};
        //   }
    } catch (error) {
        console.error('Error signing up user:', error);
        throw error;
    }
}



export async function POST(request: NextRequest) { //Post Request
    try {
        const requestBody = await request.json();
        const { firstName, lastName, password, confirmPassword, phone, aadhar, license } = requestBody;
        //console.log("Request Payload:", { firstName, password });
       // console.log(typeof aadhar);
        const result = signUp(requestBody);

        return NextResponse.json({
            // status: 'success',
            status: (await result).success ? 'success' : 'error',
            message: (await result).message,
            stattus: (await result).statusCode
            // message: 'Request processed successfully',
        });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            status: 'error',
            message: 'Request payload error',
            statusCode: 400 
        });
    }
}

