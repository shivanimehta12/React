const mongoose = require('mongoose')
let userSchema= new mongoose.Schema({
    //_id:mongoose.Schema.Types.ObjectId,
    prd_name:String,
    prd_price:String,
    prd_type:String
})

module.exports=mongoose.model('customer',userSchema)