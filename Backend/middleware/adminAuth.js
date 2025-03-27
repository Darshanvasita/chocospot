// Shree Ganeshay namah 

const jwt = require('jsonwebtoken')

exports.adminAuth = async(req,res,next) => {
    try {
        const { token } = req.headers
        if(!token){
            return res.json({success : false,messege : "Not Authorized Login Again"})
        }

        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success : false,message : "Not Authorized Login Again"})
        }
        console.log(token_decode)
        next()
    } catch (error) {
        
    }
}