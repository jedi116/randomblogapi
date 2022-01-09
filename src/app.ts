import express from "express";

const app = express();

app.use((req,res)=>{
    res.json({
        status:200
    })
})


export default app