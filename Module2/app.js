import express from "express";

const app=express();

const user=[
    {
        name:"pragyansh",
        id:1
    },
    {
        name:"bijay",
        id:2
    },
    {
        name:"abbhay",
        id:3
    }
]

app.get("/",(req,res)=>{
    // console.log("request is recieve")
    // res.send("<h1> this is the html response </h1>")
    res.send("this is the text response")
    // res.send(" two send at a time")        // only one time we can send a response if we do multi response it will give error
    // res.json({name:"abbhay"})    //this is the json response
})

app.get("/user",(req,res)=>{
    res.json(user)
})

app.get("/user/:id",(req,res)=>{
    res.send("user id is :- "+req.params.id)
})


app.listen(3000,(error)=>{
    if(error){
        return
    }
    else{
        console.log("Server is running ")
    }
})