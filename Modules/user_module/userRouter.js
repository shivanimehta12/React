const router = require('express').Router()
//const express = require('express')
//const router = express.Router()
//const validate = require('../../Modules/user_module/userValidation')
const validate = require('../user_module/userValidation')
const facade = require ('../user_module/userFacade')
const resHeandlear = require('../../handlers/responseHandler')
const { response } = require('express')

router.route('/adduser').post([validate] ,(req, res) => {
    return facade.adduser(req).then((result) => {
        resHeandlear.successHandler(res, result)
    }).catch((err) => {
        resHeandlear.errorHandler(res,err) 
    }) 
    //res.send("sotone")
})

router.route('/login').post((req,res)=>{
    return facade.login(req,res).then((result)=>{
        resHeandlear.successHandler(res, result)
    }).catch((err)=>{
        resHeandlear.errorHandler(res,err)
    })
})

router.route('/addAdmin').post((req, res)=>{
    return facade.addAdmin(req, res).then((result)=>{
        resHeandlear.successHandler(res, result)
    }).catch((err)=>{
        resHeandlear.errorHandler(res,err)
    })
})

router.route('/updateUser/:id').put((req, res)=>{
    return facade.updateUser(req, res).then((result)=>{
        resHeandlear.successHandler(res, result)
    }).catch((err)=>{
        resHeandlear.errorHandler(res, result)
    })
})

router.route('/deleteUser/:id').delete((req,res)=>{
    return facade.deleteUser(req,res).then((result)=>{
        resHeandlear.successHandler(res, result)
    }).catch((err)=>{
        resHeandlear.errorHandler(res, result)
    })
})

router.route('/getUser/:_id').get((req,res)=>{
    return facade.getUser(req,res).then((result)=>{
        resHeandlear.successHandler(res,result)
    }).catch((err)=>{
        resHeandlear.errorHandler(res,result)
    })
})

router.route('/allUser').get((req,res)=>{
    return facade.allUser(req,res).then((result)=>{
        resHeandlear.successHandler(res,result)
    }).catch((err)=>{
        resHeandlear.errorHandler(res,result)
    })
})





// router.route('/adduser').post([validate.adduser],(req,res)=>{
//     return facade.addUser(req,res).then((result)=>{
//          resHeandlear.successHandler(res,result)
//     }).catch((error)=>{
//          resHeandlear.errorHandler(res,error)
//     })
// }) 
module.exports = router 