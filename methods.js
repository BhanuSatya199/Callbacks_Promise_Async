import express from 'express';
const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("api success")
})
app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);//undefined 
    //logic to add data into your database
    res.send("data added");
})
app.put('/edit-user',(req,res)=>{
     let data=req.body;
    console.log(data);
    res.send("edited-user");
})
app.delete('/delete-user',(req,res)=>{
    console.log("It is Working");
    res.send("deleted-user");
})
app.listen(7000,()=>{
    console.log("server is running at 7000");
})