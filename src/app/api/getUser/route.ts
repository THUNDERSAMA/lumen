import connectToDatabase from "@/lib/db";
import Patient from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import Doctor from "@/models/Doctor";

export async function POST(request: NextRequest) { //Post Request
    
    try {
        let uri: string = process.env.MONGODB_URI as string;
        const requestBody = await request.json();
       const { m_id ,type} = requestBody;
       await connectToDatabase(uri);
       if(type=='patient')
       {
        const userDetails = await Patient.findOne({ _id: requestBody.m_id  });

        return NextResponse.json({
            status: 'success' ,
            data:userDetails,
            message: "user data fetched",
            code: 200,
        });
       }
       else if(type=='doc')
       {
        const userDetails = await Doctor.findOne({ _id: requestBody.m_id  });

        return NextResponse.json({
            status: 'success' ,
            data:userDetails,
            message: "user data fetched",
            code: 200,
        });
       }
       else{
        return NextResponse.json({
            status: 'error',
            message:'not valid parameters recieved'
       });
          
    }
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            status: 'error',
            message: 'Request payload error',
            statusCode: 400 
        });
    }
}



