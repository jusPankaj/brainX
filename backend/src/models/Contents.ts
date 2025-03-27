import mongoose, { Schema } from "mongoose";
import { User } from "./User";
import { Tags } from "./Tags";

const contentSchema = new Schema({
    link:{
        type: String
    },
    title:{
        type: String
    },
    tags:[{
        type: mongoose.Types.ObjectId,
        ref: 'Tags'
    }],
    userId:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

export const Content = mongoose.model('content', contentSchema);