// Shree Ganeshay namah 

const cloudinary = require('cloudinary').v2;
const productModel = require('../models/productModel')
// Function For Add Product 
const addProduct = async (req,res) => {
    try {
        
        const { name,description,price,country, } = req.body

        
        
        const image1 =  req.files.image1 && req.files.image1[0]
        const image2 =  req.files.image2 && req.files.image2[0]
        const image3 =  req.files.image3 && req.files.image3[0]
        const image4 =  req.files.image4 && req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((item)=> item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path)
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            
            price : Number(price),
            country, 
            image : imagesUrl,
            date : Date.now()
        }

        console.log(productData)

        const product = new productModel(productData)
        await product.save()

        res.json({success : true,message : "Product Added "})
  
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message });

    }
}

// Function For List Product 
const listProduct = async(req,res) => {
    try {
        const products = await productModel.find()
        res.json({success : true,products})
    } catch (error) {
        console.log(error)
        res.json({success : false,message : error.message,products})
    }
}

// Function For Removing Product 
const removeProduct = async(req,res) => {
    try {
        console.log(req.body.id)
        await productModel.findByIdAndDelete(req.body.id)
        const products = await productModel.find()
        res.json({success : true,message : "product Removed",products})
    } catch (error) {
        console.log(error)      
        res.json({success : false,message : error.message})
    }
}

const singleProduct = async(req,res) => {
    try {
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({success : true,product})
    } catch (error) {
        console.log(error)
        res.json({success : false,messege:error.message})
    }
}

module.exports = { addProduct,listProduct,removeProduct,singleProduct }