import express from 'express';

const app=express();
app.use(express.json())//This is used to parse the json data from the request body

const users =[
    {
        name:"Pragyansh",
        id:1
    },
    {
        name:"Bill Gates",
        id:123
    },
    {
        name:"Elon Musk",
        id:321
    }
]
// app.get("/Users/:id",(req,res)=>{
//     res.send("user id ="+req.params.id)
// })

// app.get("/Search",
//     (req,res)=>{
//         res.status(200).send(req.query);
//         //res.status(200);
//     }
// )


app.get("/",(req,res)=>{
    //console.log('req is received');
    //res.send("<h1>The is done using expres js</h1>")
    //res.send("hello this is simple text");
    //res.json({name:"Bijay"});//This is for sending jason data
    res.send("Hi Bijay");//It is not allowed to to send a respose after send once ,It is give error
    //res.send("Again,Hi Bijay");

})


//Get Request 
//To get all users 
app.get("/Users",(req,res)=>{
    res.json(users);
})

//Post Request
//To create a new user
app.post("/createUser",(req,res)=>{
    const newUser=req.body;
    console.log(newUser);
    users.push(newUser);
    res.json({
        message:"User created sucessfully:",
        data:newUser
    })
})

//Put Request
//To update a exisiting user
app.put("/users/:id",(req,res)=>{
    const id=req.params.id;
    const updateddata=req.body;
    console.log("Id is ="+id);
    console.log(updateddata);
    users.forEach((user)=>{
        if(user.id==id){
            user.name=updateddata.name;
        }
    })
    res.json(users);
})



// Delete

app.delete("/users/delete/:id",(req,res)=>{
    const id=req.params.id;
    users.forEach((user)=>{
        if(user.id==id){
           user.delete
        }
    })

    
})
    


app.listen(3000,(error)=>{
    if(error){
        return;
    }else{
        console.log("Server is running on port 3000");
    }
})