import { Response } from "express";
import { Link } from "../models/Links";


export interface customRequest extends Request{
    userId: string,
    
}

// export const shareLink = async(req:customRequest, res:Response) => {
    
//     try{
//     const share = req.body.share;

//     if(share){
//         await Link.create({
//             userId : req.userId,
//             hash: random(12)
//         })
//     } else{
//         await Link.deleteOne({
//             userId: req.userId
//         })
//     }

//     res.status(200).json({
//         message: "Updated shareable Link"
//     })
    
// }catch(err){
//     res.status(401).json({message: ""})
//     return;
// }
// } 