import express from 'express';

const app=express();
app.use(express.json())//This is used to parse the json data from the request body


// app.get("/Users/:id",(req,res)=>{
//     res.send("user id ="+req.params.id)
// })

// app.get("/Search",
//     (req,res)=>{
//         res.status(200).send(req.query);
//         //res.status(200);
//     }
// )

import router from "./routes/userRoutes.js";
// app.get("/",(req,res)=>{
//     //console.log('req is received');
//     //res.send("<h1>The is done using expres js</h1>")
//     //res.send("hello this is simple text");
//     //res.json({name:"Bijay"});//This is for sending jason data
//     res.send("Hi Bijay");//It is not allowed to to send a respose after send once ,It is give error
//     //res.send("Again,Hi Bijay");

// })


//Get Request 
//To get all users 

app.use("/users",router)



app.listen(3000,(error)=>{
    if(error){
        return;
    }else{
        console.log("Server is running on port 3000");
    }
})