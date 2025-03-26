import mongoose, { Model, Schema } from "mongoose";

const userSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    }
})

export const User =  mongoose.model('user', userSchema);
