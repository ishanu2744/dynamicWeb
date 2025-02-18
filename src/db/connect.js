const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/dynamicWeb";

mongoose.connect(uri)
.then(()=>{
    console.log("Database connected")
})
.catch((err)=>{
    console.log("Connection Error !!: ", err)
})