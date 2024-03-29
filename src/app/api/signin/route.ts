import { NextResponse, NextRequest } from "next/server";
import connectToDatabase from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcrypt";
import neo4j from 'neo4j-driver';



const neo4jDriver = neo4j.driver('neo4j+s://78208b1f.databases.neo4j.io', neo4j.auth.basic('neo4j', '7Ip5WHgdheXTisuYy9VB959wyzzbXzYkuTjCbQWviN8'));



// Function to create a parent node with the provided Aadhar number
async function createParentNode(aadhar: string, phoneNumber: string) {
  const neo4jSession = neo4jDriver.session();

  try {
    const createParentNodeQuery = `
      CREATE (p:Parent { aadhar: $aadhar, status: $phoneNumber })
    `;
    await neo4jSession.run(createParentNodeQuery, { aadhar, phoneNumber });
    console.log('Parent node created with Aadhar:', aadhar);
  } catch (error) {
    console.error('Error creating parent node in Neo4j:', error);
    throw error;
  } finally {
    neo4jSession.close();
  }
}

// Child Node Creation 
async function createChildNode(aadhar: string , phoneNumber: string) {
  const neo4jSession = neo4jDriver.session();

  try {
    const createChildNodeQuery = `
      CREATE (p:Child { aadhar: $aadhar , status: $phoneNumber })
    `;
    await neo4jSession.run(createChildNodeQuery, { aadhar , phoneNumber });
    console.log('Parent node created with Aadhar:', aadhar);
  } catch (error) {
    console.error('Error creating parent node in Neo4j:', error);
    throw error;
  } finally {
    neo4jSession.close();
  }
}



// Function to create or update friend relationship in Neo4j(Here the relation Ship is created)
const createRelationship = async (parentPhone: string, childPhone: string, phoneNumber: string) => {
  const neo4jSession = neo4jDriver.session();

  let createRelationshipQuery;
  createRelationshipQuery = `
    MATCH (parent:Parent {status: $parentPhone}), (child:Child {status: $childPhone})
    MERGE (parent)-[r:HAS_CHILD]->(child)
    SET r.phoneNumber = $phoneNumber
    RETURN r
  `;
  try {
    const result = await neo4jSession.run(createRelationshipQuery, { parentPhone , childPhone, phoneNumber });

    if (!result.records.length) {
      console.log('No parent node with matching status found.');
    } else {
      console.log(`Relationship created between parent node and child node with phone number: ${phoneNumber}`);
    }
  } catch (error) {
    console.error('Error creating relationship in Neo4j:', error);
  } finally {
    neo4jSession.close();
  }
};



// Sign Up Handler
async function signUp(requestBody: { firstName: string, lastName: string, password: string, confirmPassword: string, phone: number, aadhar: string }) {
  try {
    let uri: string = process.env.MONGODB_URI as string;
    await connectToDatabase(uri);

    console.log("Signup function called with name:", requestBody.firstName);

    if (requestBody.password !== requestBody.confirmPassword) {
      throw new Error("Password and confirm password do not match");
    }

    // Check if a user with the provided phone number already exists
    const existingUser = await User.findOne({ phone: requestBody.phone });

    if (existingUser) {
      console.log("User with this phone number already exists:", existingUser._id);

      // Create leaf node for the new user
      const newUser = new User({
        firstName: requestBody.firstName,
        lastName: requestBody.lastName,
        phone: requestBody.phone,
        aadhar: requestBody.aadhar,
        password: await bcrypt.hash(requestBody.password, 10)
      });

      await newUser.save();
      // await createParentNode(requestBody.aadhar, requestBody.phone.toString());
      await createChildNode(requestBody.aadhar,requestBody.phone.toString());
      await createRelationship(requestBody.phone.toString(), newUser.phone.toString(), requestBody.phone.toString());
      // const childResult = await createChildNode(requestBody.aadhar);
      // await createRelationship(requestBody.aadhar, newUser, requestBody.phone.toString());
      // const childResult = await createChildNode(requestBody.aadhar);
      // await createRelationship(requestBody.aadhar, newUser, requestBody.phone.toString());

      // Create relationship between the new user and the existing user using phone number
      // await createRelationship(existingUser._id, newUser._id, requestBody.phone.toString());

      return { success: true, message: 'User signed in successfully' };
    } else {
      // No user with the provided phone number exists, create parent node
      // No user with the provided phone number exists, create parent node
      await createParentNode(requestBody.aadhar, requestBody.phone.toString());


      // Create leaf node for the new user
      const newUser = new User({
        firstName: requestBody.firstName,
        lastName: requestBody.lastName,
        phone: requestBody.phone,
        aadhar: requestBody.aadhar,
        password: await bcrypt.hash(requestBody.password, 10)
      });

      await newUser.save();

      // Create relationship between the new user and the parent node using phone number
      // await createRelationship(requestBody.aadhar, newUser.aadhar, requestBody.phone.toString());

      return { success: true, message: 'User signed in successfully' };
    }
  } catch (error) {
    console.error('Error signing up user:', error);
    throw error;
  }
}



export async function POST(request: NextRequest) { //Post Request
  try {
    const requestBody = await request.json();
    const { firstName, lastName, password, confirmPassword, phone, aadhar } = requestBody;
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

