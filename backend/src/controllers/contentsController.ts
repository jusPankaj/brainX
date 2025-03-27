import express, { Request, Response } from 'express';
import { Content } from '../models/Contents';
import { Tags } from '../models/Tags';
import mongoose from 'mongoose';
import { User } from '../models/User';


export interface CustomRequest extends Request{
    userId?: string;
}


export const postContents = async (req:CustomRequest, res:Response) =>{
        try {
            const {link, title}  = req.body;

            console.log("is link and title coming:", req.body);
            console.log("req.userId in controller", req.userId);


            await Content.create({
                link,
                title,
                tags: [],
                userId : req.userId,
            })
            console.log("before content created json");
            
            res.status(201).json({
                message: "Content created"
            })
            return;
            

        } catch (error) {
            console.error("Error creating content", error);
            res.status(403).json({message: "Invalid User"});
            return;
        }
}

export const getContents = async(req:CustomRequest, res:Response) =>{
    try {
        const userId = req.userId;
        console.log("getContents and userId:", userId);
        
        const content = await Content.find({
            userId:userId
        }).populate("userId", "username")
        console.log("After Find Query userId:", userId);


        res.status(200).json({
            content
        })
        return;

    } catch (error) {
        console.log("Error while fetching contents", error)
        res.status(401).json({message: ""})
        return;
    }
}


export const deleteContent = async(req:CustomRequest, res:Response)=>{
    try {
        const contentId = req.body.contentId;

        await Content.deleteMany({
            userId:req.userId,
            contentId
        })

        res.status(200).json({
            contentId,
            message:"deleted"
        })

        return;

    } catch (error) {
        res.status(403).json("Trying to dleet a doc you do not own");
        return;
    }
}