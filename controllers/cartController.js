const carts = require('../models/cartSchema')


//add to cart
exports.addToCart = async (req,res)=>{

	//get producst details using destruscturing
	const {id,title,price,image,quantity}=req.body

	//logic
	try{
		//check if product already in cart if yes,, increment the quantity
		const  product=await carts.findOne({id})
		if(product){
			//if product in cart increment product quantity
			product.quantity+=1
			//update grand total in mongodb
			product.grandTotal=product.price*product.quantity

			//save changes in mongodb
			product.save()

			res.status(200).json("product added to cart succesfully")

		}else{
			//product not in cart
			const addProduct=new carts({id,title,price,image,quantity,grandTotal:price})
			await addProduct.save()
			res.status(200).json("product added to cart")
		}
	}catch(error)
	{
		res.status(200).json(error)
	}
}


//to get cart data
exports.getCart= async (req,res)=>{
	try{
		//logic
		const allCartItems= await carts.find()
		res.status(200).json(allCartItems)

	}catch(error)
	{
		res.status(401).json(error)
	}
}

//remove cart item
exports.removeCartItem= async (req,res)=>{
	
	//get id from request

	const {id}=req.params
	try{
		const removeCartItem=await carts.deleteOne({id})
		if(removeCartItem){
			//get all wishlist items after removing the particular tem
		const allItems=await carts .find()
		res.status(200).json(allItems)
		}
		else{
			res.status(402).json("Item not found")
		}
	}
	catch(error){
		res.status(401).json(error)
	}

}

	//to increment and decremnet quanttyti
	exports.incrementCount= async (req,res)=>{
		//get product id from requst params
		const {id}=req.params
		try{
			//check if product resent in cart
			const product=await carts.findOne({id})
			if(product)
			{
				//increment product count and gramnd total
				product.quantity+=1
				product.grandTotal=product.price*product.quantity
				//ave changes in mongodb
				await product.save()
				//increment and get all the product from thr cart after updating in partticulat cart items
				const allItems=await carts.find()
					res.status(200).json(allItems)
			}else{
				res.status(404).json("item not found")
			}
			

		}
		catch(error){
			res.status(401).json(error)
		}
	}


	//to decrement and decremnet quanttyti
	exports.decrementCount= async (req,res)=>{
		//get product id from requst params
		const {id}=req.params
		try{
			//check if product resent in cart
			const product=await carts.findOne({id})
			if(product)
			{
				//increment product count and gramnd total
				product.quantity-=1
				product.grandTotal=product.price*product.quantity
				//ave changes in mongodb
				await product.save()
				//increment and get all the product from thr cart after updating in partticulat cart items
				const allItems=await carts.find()
					res.status(200).json(allItems)
			}else{
				res.status(404).json("item not found")
			}
			

		}
		catch(error){
			res.status(401).json(error)
		}
	}
