//logic - resolving apis
//get all products logic

//import products collection

const products=require('../models/productSchema')



exports.getAllProducts=async(req,res)=>{
	//logic
	try{
		//get all products from products cOllection in mongoDB
		const allProducts= await products.find()
		res.status(200).json(allProducts)
	}
	catch(error){
		res.status(401).json(error)
	}
}

//to view a particular product
exports.viewproduct=async(req,res)=>{
	//get id from request
	const id=req.params.id
	//logic
	try{
		//check if id is in mongo db
		const product=await products.findOne({id})
		if(product){
			res.status(200).json(product)
		}else{
			res.status(404).json("item not found")
		}
	}catch(error)
	{
		res.status(401).json(error)
	}
}
