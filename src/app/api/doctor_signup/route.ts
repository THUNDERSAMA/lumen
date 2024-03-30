import { NextResponse, NextRequest } from "next/server";
import connectToDatabase from "@/lib/db";
import Doctor from "@/models/Doctor";
import bcrypt from "bcrypt";
import neo4j from 'neo4j-driver';

const neo4jDriver = neo4j.driver('neo4j+s://78208b1f.databases.neo4j.io', neo4j.auth.basic('neo4j', '7Ip5WHgdheXTisuYy9VB959wyzzbXzYkuTjCbQWviN8'));



// Function to create a parent node with the provided Aadhar number
async function createParentNode(aadhar: string, phoneNumber: string, license: string) {
    const neo4jSession = neo4jDriver.session();

    try {
        const createParentNodeQuery = `
        CREATE (p:Doctor { aadhar: $aadhar, phone_number: $phoneNumber , license:$license })
      `;
        await neo4jSession.run(createParentNodeQuery, { aadhar, phoneNumber , license });
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

        if (requestBody.password !== requestBody.confirmPassword) {
            throw new Error("Password and confirm password do not match");
        }

        // Check if a user with the provided phone number already exists
        //   const existingUser = await User.findOne({ phone: requestBody.phone });
        //   if (existingUser) {
        //     console.log("User with this phone number already exists:", existingUser._id);

        //     // Create leaf node for the new user
        //     const newUser = new User({
        //       firstName: requestBody.firstName,
        //       lastName: requestBody.lastName,
        //       phone: requestBody.phone,
        //       aadhar: requestBody.aadhar,
        //       password: await bcrypt.hash(requestBody.password, 10)
        //     });

        //     await newUser.save();
        //     // await createParentNode(requestBody.aadhar, requestBody.phone.toString());
        //     await createChildNode(requestBody.aadhar,requestBody.phone.toString());
        //     await createRelationship(requestBody.phone.toString(), newUser.phone.toString(), requestBody.phone.toString());
        //     // const childResult = await createChildNode(requestBody.aadhar);
        //     // await createRelationship(requestBody.aadhar, newUser, requestBody.phone.toString());
        //     // const childResult = await createChildNode(requestBody.aadhar);
        //     // await createRelationship(requestBody.aadhar, newUser, requestBody.phone.toString());

        //     // Create relationship between the new user and the existing user using phone number
        //     // await createRelationship(existingUser._id, newUser._id, requestBody.phone.toString());

        //     return { success: true, message: 'User signed in successfully' };
        //   } 
        //   else {

        // Creating the parent Node for the doctor
        await createParentNode(requestBody.aadhar, requestBody.phone.toString(), requestBody.license);
        // Create leaf node for the new user
        const newUser = new Doctor({
            firstName: requestBody.firstName,
            lastName: requestBody.lastName,
            phone: requestBody.phone,
            aadhar: requestBody.aadhar,
            password: await bcrypt.hash(requestBody.password, 10),
            license:requestBody.license
        });

        await newUser.save();
        return { success: true, message: 'User signed in successfully' };
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
        console.log("Request Payload:", { firstName, password });
        console.log(typeof aadhar);
        const result = signUp(requestBody);

        return NextResponse.json({
            status: 'success',
            message: 'Request processed successfully',
        });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            status: 'error',
            message: 'Request payload error',
        });
    }
}
