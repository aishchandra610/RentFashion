const express = require('express')
const session = require('express-session')
const router=express.Router();
router.get('/session',(req,res)=>{
    res.send("welcome to session ")
})


module.exports=router;