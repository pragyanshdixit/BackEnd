import express from "express";

const app=express();

app.get("/",(req,res)=>{
    console.log("request is recieve")
})

app.listen(3000,(error)=>{
    if(error){
        return
    }
    else{
        console.log("Server is running ")
    }
})