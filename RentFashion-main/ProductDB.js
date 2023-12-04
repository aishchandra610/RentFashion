const mongoose = require('mongoose');
const seedDB=require("./seed");
const PORT = 8080;
function connectDB()
{
    mongoose.connect('mongodb://127.0.0.1:27017/product').
    then(()=>{
        console.log("Database sucessfuly connected")
    }).
    catch((err)=>{
        console.log(err)
    });
}

connectDB();
// seedDB();
module.exports=mongoose;