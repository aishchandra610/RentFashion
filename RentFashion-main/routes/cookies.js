var express = require('express')
var cookieParser = require('cookie-parser')
const router=express.Router();

router.use(cookieParser());
router.get('/cookie',(req,res)=>{
    res.send("cookis sekhlo ")
})
router.get('/setCookie',(req,res)=>{
    res.cookie('name','RentFashion')
    res.send("cookis set  hogyi ")
})
router.get('/allcookie',(req,res)=>{
    console.log(req.cookies);
    const {name}=req.cookies;
    res.send(name);
})

module.exports=router;