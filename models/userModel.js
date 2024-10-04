const mongoose = require('mongoose')
const { type } = require('os')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    dob:{
        type:Date
    }


})

const User = mongoose.model('User',userSchema)