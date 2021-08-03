const mongoose = require('mongoose')
let userSchema= new mongoose.Schema({
    urs_name:{type: String},
    urs_password:{type: String},
    urs_email:{type: String},
    urs_address:{type: String},
    urs_role:{type: String},
    urs_token:{type: String}
    //urs_role:{"type":String,"enum":["admin","customer"]}
})

const adduser = mongoose.model('user',userSchema)

module.exports= adduser