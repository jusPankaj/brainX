### 1. No Overload Match Call
        Reason of error:  We were returning Promise as in

        export const signup =(req:Request, res:Response)=>{
            retrun res.status().json({});
        }


        ## Solution :
        By properly typing your signup controller function to return a Promise<Response> and ensuring the controller is passed as a valid route handler, the TypeScript error should be resolved


        export const signup =(req:Request, res:Response) : Promise<void> =>{
            retrun res.status().json({});
        }


