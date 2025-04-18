// Shree Ganeshay namah 

const express = require('express')
const cors = require('cors')
const { connectDB } = require('./config/mongodb')
const { connectCloudinary } = require('./config/cloudinary')
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoute')
const cartRouter = require('./routes/cartRoutes')
const orderRouter = require('./routes/orderRoutes')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Swagger definition file

require('dotenv').config()
const app = express()

const port = process.env.PORT || 4000

connectDB()
connectCloudinary()  
// middlewares
app.use(express.json())       
app.use(express.urlencoded({extended : true}))
app.use(cors())

// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// api endpoint

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


app.get('/',(req,res)=> {
    res.send("API IS Working")
})

app.listen(port,()=>{
    console.log(`Server Started On Port ${port}`)    
})