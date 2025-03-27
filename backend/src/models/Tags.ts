import mongoose, { Schema } from "mongoose";

const tagsSchema  = new Schema({
    title:{
        type:String,
        required: true,
        unique: true
    }
})

export const Tags = mongoose.model('Tags', tagsSchema);