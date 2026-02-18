import express from 'express';
const router=express.Router();

let users =[
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

//Get all Users
router.get("/getAllUsers",(req,res)=>{
    res.json(users);
})

///To create a new user
router.post("/createUser",(req,res)=>{
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
router.put("/update/:id",(req,res)=>{
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

router.delete("/delete/:id",(req,res)=>{
    const id=req.params.id;
    const UpdateUser=users.filter((user)=>user.id!=id);
    //update data to users array
    users=UpdateUser;

    res.json(UpdateUser);
    
})
    
    

export default router;