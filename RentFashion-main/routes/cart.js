const express=require('express');
const router=express.Router();
const {isLoggedIn}=require("../middleware")
const Product=require("../models/Product");
const Register = require('../models/Register');

// route to see the cart
router.get('/user/cart',isLoggedIn,async(req,res)=>{
    let user=await Register.findById(req.user._id).populate('cart');
    res.render('cart/cart',{user})
})
// adding the product to the cart 
router.post('/user/:productId/add',isLoggedIn,async(req,res)=>{
    let {productId}=req.params;
    let userId=req.user._id;
    let product=await Product.findById(productId);
    let user=await Register.findById(userId)
    user.cart.push(product);
    user.save();
    res.redirect('/user/cart')
})

router.delete('/user/:productId', isLoggedIn, async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.user._id;
        console.log(productId+" "+userId);
        // Remove the product from the user's cart
        await Register.findByIdAndUpdate(userId, { $pull: { cart: productId } });

        res.redirect('/user/cart');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



module.exports=router;