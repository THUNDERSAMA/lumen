// import  mongoose ,  {Schema2} from ("mongoose");

// const UserSchema = new mongoose.Schema({
//     firstName:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     lastName:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     phone:{
//         type:Number,
//         required:true,
//     },
//     aadhar:{
//         type:String,
//         required:true,
//     },
//     password:{
//         type:String,
//         required:true,
//         unique:true
//     },

// },{timestamps:true}
// );

// const UserModel=mongoose.models.users || mongoose.model("User",UserSchema);

// export default UserModel;

// // module.exports = mongoose.model("User",UserModel);

import mongoose, { Schema } from "mongoose";

// Check if the model already exists in Mongoose, otherwise create a new one
const UserModel = mongoose.models.User || mongoose.model("User", new Schema({
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
}, { timestamps: true }));

export default UserModel;
