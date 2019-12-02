const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://vishal1_first:Vishal1@cluster0-f5ozf.mongodb.net/test?retryWrites=true&w=majority",{useUnifiedTopology: true} ).
then((data)=>{
    console.log("  successfully connected to mongodb ");
}).catch((err)=>{
    console.log("  error while connecting to mongodb ");
 });

//schema to shape of documents in mongoDB.
//collection in  mongodb is like a tble in RdB
//in this courses collection document is like row in rdb

//schema is used to define the shape of document in mongodb collection

var courseSchema3=new mongoose.Schema({
   name:{type:String},
   author:{type:String},
   tags:[String],
   date:{type:String,default:Date.now},
   isPublished: Boolean      	
})

//String Number Date Buffer Boolean ObjectId Array

//Classes,Object
//to create object of the class we need to compile schema to model


const Course = mongoose.model("Course3",courseSchema3);

void courseSave(){
const course = new Course({
	name:"Angular Course",
	author:"Mosh",
	tags:["angular","front"],
	isPublished:true
});

course.save().then((data)=>{
	console.log("new docuemtn added",data)
},(err)=>{console.log("error while saving document")})


}

courseSave();