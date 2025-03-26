
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import rootRoutes from './routes/index'
import connectDb from './config/db';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use(cors)
app.use("/api/v1", rootRoutes);

connectDb()
.then(()=>{
    app.listen(PORT, ()=> console.log("Server is up and running on PORT :", PORT)
    )
})
.catch((err) =>{
    console.error("Error in connecting the server :", err.message());
    
})



