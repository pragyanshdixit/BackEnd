import express from 'express';
import cors from 'cors';

const app= express();

//middleware
app.use(express.json());
app.use(cors());

//Listner method
app.listen(3000,(error)=>{
    if(error) throw new Error(error);
    console.log("Server is running on port 3000");
})