

import mongoose, { Schema } from "mongoose";

// Check if the model already exists in Mongoose, otherwise create a new one
const patientModel = mongoose.models.patient || mongoose.model("patient", new Schema({
    firstName:{
        type:String,
        required:true,
      
    },
    lastName:{
        type:String,
        required:true,
        
    },
    phone:{
        type:Number,
        required:true,
    },
    aadhar:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true,
    },
    auth:{
        type:String,
        required:true,
    },
    authType:{
        type:String,
        required:true,
    }
}, { timestamps: true }));

export default patientModel;
