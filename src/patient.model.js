import mongoose from 'mongoose';

var patientSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    sex:String,
    age:Number,
    address:String,
    clinicals:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Clinicals"
    }
});

module.exports = patientSchema;