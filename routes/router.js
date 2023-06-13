//create a folder route and create a file router.js to define 
//routes for client requests
//import express
const express=require('express')

//import [rpducts controller]
const productsController=require('../controllers/productsController')

//import wishlist Controller
const wishlistController=require('../controllers/wishlistController')

//import cartr controller
const cartController=require('../controllers/cartController')

// using express create an object for router class inorder to setup path
const router =new express.Router()

// resolving clien requests
//api-get all products request
router.get('/products/all-products',productsController.getAllProducts)

// api to get a particular product
router.get('/products/view-product/:id',productsController.viewproduct)

//api  to add produsct to the wishlist
router.post('/wishlist/add-to-wishlist',wishlistController.addToWishlist)

//api to get all wishlist products
router.get ('/wishlist/get-wishlist',wishlistController.getWishlistItems)

//api to remove a particular item
router.delete('/wishlist/remove-wishlist-item/:id',wishlistController.removeWishlistItem)

//api to add to cart
router.post('/cart/add-to-cart',cartController.addToCart)

//api to get all cart items
router.get('/cart/get-cart',cartController.getCart)

//api to remove cart item
router.delete('/cart/remove-cart-item/:id',cartController.removeCartItem)

//api to get increse cart item count
router.get('/cart/incrementCount/:id',cartController.incrementCount)

//api to decreses cart item counr
router.get('/cart/decreseCount/:id',cartController.decrementCount)

//export router
module.exports=router
