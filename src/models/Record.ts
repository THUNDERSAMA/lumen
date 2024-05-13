import mongoose, { Schema } from "mongoose";

// Check if the model already exists in Mongoose, otherwise create a new one
const RecordSchema =  new Schema({
    mid:{
        type:String,
        required:true,
    },
    doctorCount:{
        type:Number,
        required:false,
    },
    presciCount:{
        type:Number,
        required:false,
    },
    medicineCount:{
        type:Number,
        required:false,
    },
    doctorids:{
        
            type:String,
            required:true,
        
    },
    medids:{
        
        type:String,
        required:true,
    
}
    
}, { timestamps: true });
const RecordModel=mongoose.models.Record || mongoose.model("Record",RecordSchema);
export default RecordModel;
