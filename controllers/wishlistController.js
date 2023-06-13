//impport wishlist collection
const wishlists=require('../models/wishlistSchema')


//add to wishlist logic
exports.addToWishlist=async(req,res)=>{

	//get product details from request

	//using destructuring

	const {id,title,price,image}=req.body
	try{
		//check if a product  present in mongodb
		const item=await wishlists.findOne({id})
		if(item){
			res.status(403).json("item already exist in wishlist")
		}else{
			//add item to the wishlist
			const newProduct=new wishlists({id,title,price,image})
			//to store in mongodb
			await newProduct.save()
			res.status(200).json("product added to wishlist")
		}
	}
	catch(error){
		res.status(401).json(error)
	}

}


//get wishlist data
exports.getWishlistItems=async(req,res)=>{
	try{
		//get all wishlist iem from mongodb
		const allWishListItems=await wishlists.find()
		res.status(200).json(allWishListItems)

	}catch(error){
		res.status(401).json(error)
	}
}


//to remove wishlist item
exports.removeWishlistItem= async (req,res)=>{
	
	//get id from request

	const {id}=req.params
	try{
		const removeWishlistItem=await wishlists.deleteOne({id})
		if(removeWishlistItem){
			//get all wishlist items after removing the particular tem
		const allItems=await wishlists.find()
		res.status(200).json(allItems)
		}
	}
	catch(error){
		res.status(401).json(error)
	}
}