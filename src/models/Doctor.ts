import mongoose, { Schema } from "mongoose";

// Check if the model already exists in Mongoose, otherwise create a new one
const DoctorSchema =  new Schema({
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
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    license:{
        type:String,
        required:true,
        
    },
    language:{
        type:String,
        default:"En"
    },
    graphDB_id:{
        type:String,
        required:true,
    },
    unique_key:{
        type:String,
        required:true
    },
    lastLogin:{
        type:Date,
        default:null
    }
}, { timestamps: true });
const DoctorModel=mongoose.models.Doctor || mongoose.model("Doctor",DoctorSchema);
export default DoctorModel;
