const express=require("express");
const router=express.Router();
const Product =require("../models/Product")
const Review= require("../models/Review")
const validateReview=require("../middleware")
const {isLoggedIn} =require("../middleware")

router.post('/products/:id/review',isLoggedIn,async(req,res)=>{
    try{
    let {id}=req.params;
    let{rating,comment}=  req.body;
    const product=await Product.findById(id);
    const review= Review({rating,comment});

    product.reviews.push(review);
    await review.save();
    await product.save();
    // req.flash('info', 'Review Added successfully')
    res.redirect(`/products/${id}`);
    }
    catch(err)
    {
        res.status(404).render('/products/error')
    }
})

module.exports=router;

// Product.db.reviews.deleteMany({}) 