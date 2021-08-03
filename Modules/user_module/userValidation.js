const joi = require('@hapi/joi')
const resHeandlear = require('../../handlers/responseHandler')

const adduser = async (req,res,next) =>{
    try {
        const Data = joi.object({
            //urs_name : joi.string().required(),
            urs_email : joi.string().required(),
            urs_password : joi.string().required(),
            urs_address : joi.string().required()
            //urs_role :joi.string().valid('ADMIN', 'USER').uppercase().required()
        })
        await Data.validateAsync(req.body,{allowUnknown:true})
        //console.log('any')
        next()
    }catch (error){
        //console.log('any1')
        resHeandlear.validationErrorHandler(res,error);
    }
}

module.exports = adduser 
