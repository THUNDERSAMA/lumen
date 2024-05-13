import connectToDatabase from "@/lib/db";
import RecordModel from "@/models/Record";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        
        const type = req.nextUrl.searchParams.get('mid');
        console.log(req);
        if(type!=null)
        {
            const ids = req.nextUrl.searchParams.get('mid');
            let uri: string = process.env.MONGODB_URI as string;
       await connectToDatabase(uri);
         const existingUser = await RecordModel.findOne({ mid: ids  });
         if(existingUser)
         {
            return NextResponse.json({ status: true, message: existingUser, statusCode: 200 });
         }
         else{
       
  
  return NextResponse.json({ status: true, message: "no record found", statusCode: 600 });
}
        }
        else{
            return NextResponse.json({
                status: 'error',
                message: 'Request invalid error',
                statusCode: 400 
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

export async function POST(req: NextRequest) {
    try {
        const requestBody = await req.json();
        const { type,data,mid } = requestBody;  
        if(type=='D')
        {
            const result=await getdoc(data,mid);
            return NextResponse.json({
                status: 'Success',
                message: result,
                code: 200 
            });

        } 
        else if(type=='P')
        {
            const result=await getrx(mid);
            return NextResponse.json({
                status: 'Success',
                message: result,
                code: 200 
            });
        }
        else if(type=='M')
        {
            const result=await getmed(data,mid);
            return NextResponse.json({
                status: 'Success',
                message: result,
                code: 200 
            });
        }
        else{
            return NextResponse.json({
                status: 'error',
                message: 'Request invalid error',
                statusCode: 400 
            });
        }
    } catch (error) {
        console.log(error);
    }
  }
async function getdoc(data: string,ids: string) {
    try {
       let uri: string = process.env.MONGODB_URI as string;
       await connectToDatabase(uri);
         const existingRec = await RecordModel.findOne({ mid: ids  });
         if(existingRec)
         {
            const dIds=existingRec.doctorids;
            let JSONObject = JSON.parse(dIds);
            const hasValue = Object.values(JSONObject.data).includes(data);
            if(!hasValue)
            {
                JSONObject.data.push(data);
                console.log(JSONObject);
            const updval = await RecordModel.updateOne({mid: ids}, {$set:{doctorids:JSON.stringify(JSONObject)}});
           const updRec = await RecordModel.updateOne({mid: ids}, {$set:{doctorCount:existingRec.doctorCount+1}});
           if(updRec && updval)
           {
            return { success: true, message: 'doctor id added', statusCode: 200 };  
           }
             else{
                return { success: true, message: 'doctor id not added some error occured', statusCode: 200 };
             }
        }
            else{
                return { success: true, message: 'doctor id already exist', statusCode: 200 };
            }
           
         }
         else{
       
  
  return { success: true, message: "no record found", statusCode: 600 };
}
    } catch (error) {
       console.log(error);
       return { success: false, message: "not added", statusCode: 410 };
    }
}
async function getmed(data: string,ids: string) {
  try {
       let uri: string = process.env.MONGODB_URI as string;
       await connectToDatabase(uri);
         const existingRec = await RecordModel.findOne({ mid: ids  });
         if(existingRec)
         {
            const dIds=existingRec.medids;
            let JSONObject = JSON.parse(dIds);
            //console.log(JSONObject);
            const hasValue = Object.values(JSONObject.data).includes(data);
            if(!hasValue)
            {
                JSONObject.data.push(data);
                console.log(JSONObject);
            const updval = await RecordModel.updateOne({mid: ids}, {$set:{medids:JSON.stringify(JSONObject)}});
           const updRec = await RecordModel.updateOne({mid: ids}, {$set:{medicineCount:existingRec.medicineCount+1}});
           if(updRec && updval)
           {
            return { success: true, message: 'med id added', statusCode: 200 };  
           }
             else{
                return { success: true, message: 'med id not added some error occured', statusCode: 200 };
             }
        }
            else{
                return { success: true, message: 'med id already exist', statusCode: 200 };
            }
           
         }
         else{
       
  
  return { success: true, message: "no record found", statusCode: 600 };
}
    } catch (error) {
       console.log(error);
       return { success: false, message: "not added", statusCode: 410 };
    }
}
async function getrx(ids: string) {
    try {
        let uri: string = process.env.MONGODB_URI as string;
        await connectToDatabase(uri);
          const existingRec = await RecordModel.findOne({ mid: ids  });
          if(existingRec)
          {
            
            const updRec = await RecordModel.updateOne({mid: ids}, {$set:{presciCount:existingRec.presciCount+1}});
            if(updRec )
            {
             return { success: true, message: 'presciption id added', statusCode: 200 };  
            }
              else{
                 return { success: true, message: 'presciption  not added some error occured', statusCode: 200 };
              }
            
          }
          else{
        
   
   return { success: true, message: "no record found", statusCode: 600 };
 }
     } catch (error) {
        console.log(error);
        return { success: false, message: "not added", statusCode: 410 };
     }
}

