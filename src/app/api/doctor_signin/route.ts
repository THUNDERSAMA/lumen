import connectToDatabase from "@/lib/db";
import Doctor from "@/models/Doctor";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import {SignJWT,jwtVerify} from 'jose'
import { cookies } from "next/headers";
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
export async function POST(request: NextRequest) { //Post Request
    try {
      //  console.log(request.body);
        const requestBody = await request.json();
       // const { firstName, lastName, password, confirmPassword, phone, aadhar, license } = requestBody;
       // console.log("Request Payload:", { phone, password });
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

async function signUp(requestBody: {  password: string, phone: number }) {
    try {
        let uri: string = process.env.MONGODB_URI as string;
        await connectToDatabase(uri);

        //console.log("Signup function called with name:", requestBody.firstName);

        // Check if a user with the provided phone number already exists
          const existingUser = await Doctor.findOne({ phone: requestBody.phone  });
          if (!existingUser) {
            console.log("No user with this details  exists:500");
            
            return { success: false, message: 'User not exists' , statusCode: 500 };
          } 
          const passwordMatch = await bcrypt.compare(requestBody.password, existingUser.password);

if (passwordMatch) {
    const user = {
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        phone: existingUser.phone,
        m_id:existingUser._id,
        g_id:existingUser.g_id
    }
    
   const expires=new Date(Date.now()*10*10*60*1000);
   const session=await encrypt({user,expires});
   cookies().set('session',session,{expires,httpOnly:false})

   console.log("sign in successfully");
    return { success: true, message: 'User signed in successfully', statusCode: 200 };
} else {
    console.log("No user with this details  exists:400");
            
            return { success: false, message: 'invalid password' , statusCode: 400 };
}
         
    } catch (error) {
        console.error('Error signing up user:', error);
        throw error;
    }
}

