### 1. No Overload Match this Call
        Reason of error:  We were returning Promise as in

        export const signup =(req:Request, res:Response)=>{
            retrun res.status().json({});
        }


        ## Solution :
        By properly typing your signup controller function to return a Promise<Response> and ensuring the controller is passed as a valid route handler, the TypeScript error should be resolved


        export const signup =(req:Request, res:Response) : Promise<void> =>{
            retrun res.status().json({});
        }


### 2. Property 'user' does not exist on type req
i.e. we need to Override the Types of Request Object

Solution : creating a new interface  which  extends Request object


interface AuthRequest extends Request {
    userId?: string;
}


to do this :- as req is expres object and whatever we want to add to it as req.user does not exist and so violating the typescript rule;

req.userId = decoded.userId;

userId is the name which JWT stores, if you use id instead then you have to change evrywhere as id instead of userId 