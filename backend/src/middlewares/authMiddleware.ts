import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';


//default Request type from Express does not include a user property.
// TypeScript expects only standard properties like req.body, req.params, and req.query.

interface AuthRequest extends Request {
    user?: {userId: string};
}




export const authenticateUser = (req:AuthRequest , res:Response, next:NextFunction) =>{
    //extracting token from request headers

    const token = req.header('Authorization')?.split(' ')[1];

    if(!token){
        return res.status(403).json({
            message: "Access Denied, No token Provided"
        })
    }

    try {
        const secretKey = process.env.JWT_SECRET;

        if(!secretKey){
            throw new Error("secretKey not provided");
        }

        const decoded = jwt.verify(token, secretKey) as { userId: string};

        req.user = {userId: decoded.userId};

        next();

    } catch (error) {
        res.status(403).json({message: "Invalid Token"})
    }

}