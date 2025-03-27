// Shree Ganeshay namah 

const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const Stripe = require('stripe')

require('dotenv').config();


// gloabal variable
const currency = 'inr'
const deliveryCharge = 10

// gateway initialization

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Placing order Using COD Method
exports.placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }


        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: {} })
        res.json({ success: true, message: "Order Placed" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Placing order Using Stripe Method
exports.placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Stripe",
            payment: false,
            date: Date.now()
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        const line_items = items.map((item) => ({
            price_data: {
                currency: "inr",  // Make sure to use a valid currency
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }));

        line_items.push({
            price_data: {
                currency: "inr",  // Make sure currency is defined
                product_data: {
                    name: 'Delivery Charges'
                },
                unit_amount: 5000 // Example delivery charge ($50)
            },
            quantity: 1
        });

        // ✅ Yeh sahi method hai
        const session = await stripe.checkout.sessions.create({ 
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment'
        });

        res.json({ success: true, session_url: session.url });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

//verify Stripe
exports.verifyStripe = async(req,res) => {
    const { orderId,success,userId } = req.body
    console.log(req.body)
    try {
        if(success === "true"){
            await orderModel.findByIdAndUpdate(orderId,{payment : true})
            await userModel.findByIdAndUpdate(userId,{cartData : {}})
            res.json({success : true})
        }else{
            await orderModel.findByIdAndDelete(orderId)
            res.json({success : false})
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Placing order Using Razorpay Methode 
exports.placeOrderRazorpay = async (req, res) => {

}

//  all Orders data for Admin Panel 
exports.allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// User Order data for Frontend
exports.userOrders = async (req, res) => {
    try {
        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// update Order Status  From Admin Pannal
exports.updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body

        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({ success: true, message: "Status Updated" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}