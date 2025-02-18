const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 3
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email');
            }
        }
    },
    phone:{
        type: Number,
        required: true,
        unique: true,
        minLength: 10
    },
    message:{
        type: String,
    }
})

// create a new collection
const User = mongoose.model('User', userSchema);
module.exports = User;