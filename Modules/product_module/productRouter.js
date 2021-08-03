const router = require('express').Router()
//const validate = require('../user_module/userValidation')
const facade = require ('../product_module/productFacade')
const resHeandlear = require('../../handlers/responseHandler')
const { response } = require('express')

router.route('/addproduct').post((req,res) =>{
    return facade.addproduct(req).then((result) => {
        resHeandlear.successHandler(res, result)
    }).catch((err) => {
        resHeandlear.errorHandler(res,err) 
    })  
})

router.route('/updateproduct/:id').put((req, res)=>{
    return facade.updateproduct(req, res).then((result)=>{
        resHeandlear.successHandler(res, result)
    }).catch((err)=>{
        resHeandlear.errorHandler(res, result)
    })
})

router.route('/deleteproduct/:id').delete((req, res)=>{
    return facade.deleteproduct(req, res).then((result)=>{
        resHeandlear.successHandler(res, result)
    }).catch((err)=>{
        resHeandlear.errorHandler(res, result)
    })
})

router.route('/allproduct').get((req,res)=>{
    return facade.allproduct(req,res).then((result)=>{
        resHeandlear.successHandler(res,result)
    }).catch((err)=>{
        resHeandlear.errorHandler(res, result)
    })
})

module. exports = router