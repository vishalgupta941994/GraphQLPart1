const mongoose = require("mongoose");


//mongoose.connect("mongodb+srv://vishal1_first:Vishal1@cluster0-f5ozf.mongodb.net/test?retryWrites=true&w=majority",{useUnifiedTopology: true} ).
// then((data)=>{
    
// }).catch((err)=>{
//     console.log("  error while connecting to mongodb ");
//  });


(async()=>{
	try{
     var data= await mongoose.connect("mongodb+srv://vishal1_first:Vishal1@cluster0-f5ozf.mongodb.net/test?retryWrites=true&w=majority",{useUnifiedTopology: true} )
     console.log("  successfully connected to mongodb ");
	}catch(e){
		console.log("error while connecting")
	}
})()
//schema to shape of documents in mongoDB.
//collection in  mongodb is like a tble in RdB
//in this courses collection document is like row in rdb

//schema is used to define the shape of document in mongodb collection

var courseSchema3=new mongoose.Schema({
   name:{
   	type: String,
   	required:true
   },
   author:{
   	type: String
   },
   tags:{type:Array,
   	validate:{
   		isAsync:true
   		validator: function(v,callback){

   			setTimeout(()=>{
	return v && v.length>0;
	callback("hello")
   			},4000)
   		
   		},
   		message:"set a mesage"

   	}},
date:{
   	type:Date,
   	default:Date.now},
category:{
     type:String,
     required:true,
     enum:["abc1","abc2","abc3"]
   	},
isPublished:
       Boolean ,
price:{
		type:Number,
		required: function(){return this.isPublished},
		min:5,
		max:100
	}     	
})


//String Number Date Buffer Boolean ObjectId Array

//Classes,Object
//to create object of the class we need to compile schema to model


const Course = mongoose.model("Course3",courseSchema3);

async function courseSave(){

const course = new Course({
	name:"Angular Course",
	author:"Mosh",
	tags:["angular","front"],
	isPublished:true,
	price: 15,
	category:"abc2"

});

try{
//const cou=await course.save();
const cou=await course.validate();
console.log("check",cou);
}catch(e){
console.log("error",e);
console.log("error while saving document")
}



}


courseSave();

async function getCourses(){

	const courses=await Course
	.find({isPublished:true})
	//.find({price:{$gte:10}})
	//.find({price: {$in:[10,15,20]}})
    

    //find({isPublished:true,tags:'backend'})
	//.find()
	//.or([{author:"mosh"},{isPublished:true}])
	.limit(10)
	.sort({name:1})
	//.select({name:1,tags:1})

console.log("courses",courses);
}



async function updateCourse1(id){
	//two approach
	 const course =await Course.findById(id);
	 if(!course)return;

	 //course.isPublished=true
	 //course.author="vishal"


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

//var abc=["5de5494fca30351a30bfb3c2",""]
async function updateCourse2(){
		 const course =await Course.find({isPublished:true});
		 console.log("course",course);
	const result = await Course.update({_id:"5de687c13a43cb2148ac859d"},{
		$set:{
			author:"vishalcheck",
			isPublished:false
		}
	});
	console.log("result",result);
}

//
//getCourses()
//updateCourse2();