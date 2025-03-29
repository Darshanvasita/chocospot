// Shree Ganeshay namah 

const userModel = require("../models/userModel")

// add products to user cart
exports.addToCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData

        // if (cartData[itemId]) {
        //     if (cartData[itemId][size]) {
        //         cartData[itemId][size] += 1
        //     } else {
        //         cartData[itemId][size] = 1
        //     }
        // }else{
        //      cartData[itemId] = {}
        //      cartData[itemId][size] = 1
        // }

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }

        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success : true,message : "Added To Cart"})
    } catch (error) {
        console.log(error)
        res.json({success : false,message : error.message})
    }
}

// update user cart 
exports.updateCart = async (req, res) => {
try {
        const { userId,itemId,quantity} = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData
    
        // cartData[itemId][size] = quantity

        if (quantity > 0) {
            cartData[itemId] = quantity;
        } else {
            delete cartData[itemId]; // Remove item if quantity is 0
        }

        // aa else vado statement 1 var integrate karine joi levo padse

        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success : true,message : "Cart Updated"})
    }catch(error){
        console.log(error)
        res.json({success : false,message : error.message})
    }
}
// get user cart 
exports.getUserCart = async (req, res) => {
    try {
        const { userId } = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData

        res.json({success : true,cartData})

    } catch (error) {
        
    }
}