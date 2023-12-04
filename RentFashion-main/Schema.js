const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.string().min(0).required(),
    desc: Joi.string().required(),    
})
const reviewSchema = Joi.object({
    rating: Joi.string().min(0).max(5),
    comment: Joi.string(),
})

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required()
    .regex(/[0-9a-zA-Z]*\d[0-9a-zA-Z]*/) // at least one digit in any position
    .regex(/[0-9a-zA-Z]*\[a-zA-Z][0-9a-zA-Z]*/) // at least one letter in any position
    .min(4),   
})

module.exports={registerSchema,reviewSchema,productSchema};