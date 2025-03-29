// Shree Ganeshay namah 

const { default: mongoose } = require("mongoose");

exports.connectDB = async ()=> {
    await mongoose.connect(`${process.env.MONGODB_URL}chocospot`)
    .then(()=>{
        console.log("DB Connected")
    }).catch((err)=>{
        console.log(err)
    })
}


