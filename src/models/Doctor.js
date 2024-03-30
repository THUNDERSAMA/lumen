import mongoose, { Schema } from "mongoose";

// Check if the model already exists in Mongoose, otherwise create a new one
const DoctorModel = mongoose.models.User || mongoose.model("Doctor", new Schema({
    firstName:{
        type:String,
        required:true,
        unique:true
    },
    lastName:{
        type:String,
        required:true,
        unique:true
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
        unique:true
    },
    license:{
        type:String,
        required:true,
        unique:true
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
}, { timestamps: true }));

export default DoctorModel;
