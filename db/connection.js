//1 import mongoose
const mongoose=require('mongoose')

//2
const db=process.env.DATABASE

mongoose.connect(db,{
	useUnifiedTopology:true,
	useNewUrlParser:true
}).then(()=>{
	console.log("database is connected");
}).catch((err)=>{
	console.log(err);
})