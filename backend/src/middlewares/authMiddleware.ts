import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';


//  default Request type from Express does not include a user property.
// TypeScript expects only standard properties like req.body, req.params, and req.query.

interface AuthRequest extends Request {
    userId?: string;
}


export const authenticateUser = async (req:AuthRequest , res:Response, next:NextFunction): Promise<void> =>{
    //extracting token from request headers

    try{
        const token = req.header('Authorization')?.split(' ')[1];
    
        if(!token){
            res.status(401).json({ message: "Invalid token format"});
            return;
        }

        console.log("got token: ", token); 

        const secretKey = process.env.JWT_SECRET;
        console.log("got secretKey", secretKey);
        
        if(!secretKey){
            throw new Error("secretKey not provided in environment variables");
        }

        console.log("before decoded");
        const decoded = jwt.verify(token, secretKey) as { userId: string};
        console.log("After decoded");
        
        if(decoded){
            console.log("Decoded Paylod", decoded);
            req.userId = decoded.userId;
            console.log("decoded.userId in m/w", decoded.userId);
        }else{
            throw new Error("verification Failed")
        }
       
        
        next();

    } catch (error) {
        res.status(401).json({message: "You are not Logged in"});
        return;
    }
}