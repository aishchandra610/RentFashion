const express = require('express')
const router=express.Router();
const User=require('../models/Register');
const passport = require('passport');

router.get('/register',(req,res)=>{
    res.render('register/signup')
})

router.post('/register',async(req,res)=>{
    let{username,email,password,role}=req.body;
    const user=new User({email,username,role});
    const newUser=await User.register(user,password);
    req.login(newUser,function(err){
        if(err)
        {
            return next(err);
        }
        return res.redirect('/products')
    })
})

router.get('/login',(req,res)=>{
    res.render('register/login')
})

router.post('/login',
    passport.authenticate('local',
    {
        failureRedirect:'/login',
        failureMessage:true
    }
    ),
(req,res)=>{
    // console.log(req.user)
    res.redirect('/products');
})

// req.logout allways workin the call back function 
router.get('/logout',(req,res)=>{
    ()=>{
        req.logout();
    }
    res.redirect('/login')
})
module.exports=router;


// after authentication means login get req.user 