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

function courseSave(){

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


async function getCourses(){

	const courses=await Course
	.find({author:"Mosh",isPublished:true})
	//.find({price:{$gte:10}})
	//.find({price: {$in:[10,15,20]}})
    

    //find({isPublished:true,tags:'backend'})
	//.find()
	//.or([{author:"mosh"},{isPublished:true}])
	.limit(10)
	.sort({name:1})
	.select({name:1,tags:1})

console.log("courses",courses);
}
getCourses()


async function updateCourse1(id){
	//two approach
	 const course =await Course.findById(id);
	 if(!course)return;

	 course.isPublished=true
	 course.author="vishal"


	 await course().save();
	// Approach Query first
	// findbyId
	// modify its properties
	// save()

	// approach first
	// update directly
	// get the updated document
	//

}
async function updateCourse2(id){
	const result = await Course.update({_id:id},{
		$set:{
			author:"mosh",
			isPublished:true
		}
	});
	console.log("result",result);
}