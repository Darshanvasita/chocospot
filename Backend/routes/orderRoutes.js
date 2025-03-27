// Shree Ganeshay namah 

const express = require('express')
const { allOrders, updateStatus, placeOrder, placeOrderStripe, placeOrderRazorpay, userOrders, verifyStripe } = require('../controllers/order.controller')
const { adminAuth } = require('../middleware/adminAuth')
const { authUser } = require('../middleware/auth')

const orderRouter = express.Router()

// Admin Features

orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

// verify payment 
orderRouter.post('/verifyStripe',authUser,verifyStripe)

// User Feature
orderRouter.post('/userorders',authUser,userOrders)

module.exports = orderRouter

