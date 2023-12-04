const mongoose =require("mongoose");
const Product=require("./models/Product");
const products=[
    {
        name:"Kvsfab lehenga choli",
        image:"https://i.pinimg.com/originals/bc/d1/80/bcd180d657999e47179bdc050116ea98.jpg",
        price:2857,
        desc:"Embroidered Sequinned Semi-Stitched Lehenga & Blouse With Dupatta"
    },
    {
        name:"DEAS flats",
        image:"https://th.bing.com/th/id/OIP.1YT94NS6JXGxq7gLmLvoEQAAAA?rs=1&pid=ImgDetMain",
        price:1800,
        desc:"Women Gold-Toned And Pink Ethnic Mules Flats"}
    ]
    async function seedDB()
    {
        await Product.insertMany(products);
        console.log("initialize data ")
    }
module.exports =seedDB;
