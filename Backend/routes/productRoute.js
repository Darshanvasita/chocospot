// Shree Ganeshay namah 

const express = require('express')

const productController = require('../controllers/product.controller')
const upload = require('../middleware/multer')
const { adminAuth } = require('../middleware/adminAuth')

const productRouter  =  express.Router()

productRouter.post('/add',adminAuth,upload.fields([{name : "image1",maxCount : 1},{name : "image2",maxCount : 1},{name : "image3",maxCount : 1},{name : "image4",maxCount : 1}]),productController.addProduct)
productRouter.post('/remove',adminAuth,productController.removeProduct)
productRouter.post('/single',productController.singleProduct)
productRouter.get('/list',productController.listProduct)

module.exports = productRouter