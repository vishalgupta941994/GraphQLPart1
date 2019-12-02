const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://vishal1_first:Vishal1@cluster0-f5ozf.mongodb.net/test?retryWrites=true&w=majority",{useUnifiedTopology: true} ).
then((data)=>{
    console.log("  successfully connected to mongodb ");
}).catch((err)=>{
    console.log("  error while connecting to mongodb ");
 });

// 	(err,data)=>{
// 	if(err){
//         console.log("error   ",err);
// 	}else{ 
//         console.log("data ",data);
// 	}
// });
