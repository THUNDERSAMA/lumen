import { NextResponse, NextRequest } from "next/server";
import connectToDatabase from "@/lib/db";
import Patient from "@/models/User";
import bcrypt from "bcrypt";
import neo4j from 'neo4j-driver';
import {SignJWT,jwtVerify} from 'jose'
import { cookies } from "next/headers";
import Cookies from "js-cookie";
import RecordModel from "@/models/Record";

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
async function createParentNode(aadhar: string, phone_number: string,hashedAadhar:String) {
    const neo4jSession = neo4jDriver.session();

    try {
        const createParentNodeQuery = `CREATE (p:Patient { g_id:$hashedAadhar,aadhar: $aadhar, phone_number: $phone_number  })`;
        await neo4jSession.run(createParentNodeQuery, { hashedAadhar,aadhar, phone_number });
        console.log('patient node created with Aadhar:', aadhar);
    } catch (error) {
        console.error('Error creating parent node in Neo4j:', error);
        throw error;
    } finally {
        neo4jSession.close();
    }
}

async function createLeafNode(aadhar: string, phone_number: string,hashedAadhar:String) {
    const neo4jSession = neo4jDriver.session();

    try {
        const createLeafNodeQuery = `MATCH (p:Patient {phone_number: $phone_number})
        CREATE (p)-[:HAS_CHILD]->(child:ChildNode {g_id:$hashedAadhar,aadhar: $aadhar})`;
        await neo4jSession.run(createLeafNodeQuery, { hashedAadhar,aadhar, phone_number });
        console.log('patient node created with Aadhar:', aadhar);
    } catch (error) {
        console.error('Error creating parent node in Neo4j:', error);
        throw error;
    } finally {
        neo4jSession.close();
    }
}
// Sign Up Handler
async function signUp(requestBody: { firstName: string, lastName: string, password: string, phone: number, aadhar: string}) {
    try {
        let uri: string = process.env.MONGODB_URI as string;
        await connectToDatabase(uri);

        console.log("Signup function called with name:", requestBody.firstName);
 const hashedAadhar = await bcrypt.hash(requestBody.aadhar, 12);
        // Check if a user with the provided phone number already exists
          const existingUser = await Patient.findOne({ phone: requestBody.phone , aadhar : requestBody.aadhar });
          if (existingUser) {
            console.log("User with this phone number already exists:", existingUser._id);

            return { success: true, message: 'User already exists with phone no nad aadhar' , statusCode: 409 };
          } 
          else{
          const existingPatient = await Patient.findOne({ phone: requestBody.phone  });
         
       if(existingPatient)
       {
        await createLeafNode(requestBody.aadhar, requestBody.phone.toString(),hashedAadhar);
       }
       else{
        await createParentNode(requestBody.aadhar, requestBody.phone.toString(),hashedAadhar);
       }
    }
        
        
        const newUser = new Patient({
            firstName: requestBody.firstName,
            lastName: requestBody.lastName,
            phone: requestBody.phone,
            aadhar: requestBody.aadhar,
            password: await bcrypt.hash(requestBody.password, 10),
            unique_key:hashedAadhar,
            graphDB_id:hashedAadhar,
            language:Cookies.get("language") || "en",
            auth:"false",
            authType:"null"
        });
        const savedUser = await newUser.save();
        const jsonrec = {
            "data":[]
        };
        const createRecord =new RecordModel({
            mid:savedUser._id,
            doctorCount:0,
            presciCount:0,
            medicineCount:0,
            doctorids:JSON.stringify(jsonrec),
            medids:JSON.stringify(jsonrec)


        })
        const savedRec = await createRecord.save();
        const user = {
            firstName: requestBody.firstName,
            lastName: requestBody.lastName,
            phone: requestBody.phone,
            m_id:savedUser._id,
            g_id:hashedAadhar,
            language:savedUser.language
        }
        
       const expires=new Date(Date.now()*10*10*60*1000);
       const session=await encrypt({user,expires});
       cookies().set('session',session,{expires,httpOnly:false})
        return { success: true, message: 'User signed in successfully' ,statusCode:200};
        //   }
    } catch (error) {
        console.error('Error signing up user:', error);
        throw error;
    }
}



export async function POST(request: NextRequest) { //Post Request
    try {
        const requestBody = await request.json();
        const { firstName, lastName, password, phone, aadhar} = requestBody;
        console.log("Request Payload:", { firstName, password });
        console.log(typeof aadhar);
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



