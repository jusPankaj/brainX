import mongoose from "mongoose";

const connectDb = async() =>{
    try {
        if(!process.env.MONGODB_URI){
            throw new Error("MONGODB_URI not defined");
        }
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("DB connection error: ", error);
        process.exit(1);
    }
};


export default connectDb;