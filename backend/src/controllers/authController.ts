import express, { Request, Response } from 'express'
import { User } from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'

const secretKey = process.env.JWT_SECRET as string;

if (!secretKey) {
    throw new Error("Missing JWT_SECRET in environment variables");
}

export const signup = async (req: Request, res: Response):Promise<void>  =>{
    try {

        console.log("data received", req.body);
        const {username,password} = req.body;

        if(!username || !password){
            res.status(400).json({message: "username and password required"});
            return;
        }

        const existingUser = await User.findOne({username});

        if(existingUser){
            console.log("inside existingUSer");
            
            res.status(403).json({message: "Username already exist"});
            return;
        }

        const hashedPassword =  await bcrypt.hash(password, 12);

        const user = await User.create({
            username,
            password:hashedPassword
        })


        if(user){
            console.log("inside user");
            res.status(201).json({
                message: "User Signed up",
                user
            })
            return;
        }
    } catch (err) {
        console.error("error in signing up the user:", err);
        res.status(500).json({message: "Server Error"}); 
        return;       
    }
}



export const signin = async(req:Request, res:Response): Promise<void> => {
        try {
                console.log("Inside signin", req.body);
                const {username, password} = req.body;

                const existingUser = await User.findOne({username});
                
            
            if(!existingUser){
                res.status(200).json({message: "User Not Found"});
                return;
            }

            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

            if(!isPasswordCorrect){
                res.status(403).json({message: "Wrong Credentials"});
            }

            const token = jwt.sign(
                {userId:existingUser._id},
                secretKey,
                {expiresIn: '1hr'}
            )
            console.log("JWY token:", token);
            

            res.status(200).json({message: "SignedIn Successfully", token});

        }catch (error) {
            res.status(500).json({message: "Server Error"})  
            return; 
        }
}