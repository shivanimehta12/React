const service = require('./productService')
const resHeandlear = require('../../handlers/responseHandler')
const productConstant = require('./productContext')
const constant = require('../../utils/constant')

const addproduct = async (req)=>{
    return service.addproduct(req).then((data)=>{
        if (data && data === 1) {
            return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.emailExist, data)
        } else {
            return resHeandlear.requestResponse(true, constant.HTTP_CODE.ok,  productConstant.MESSAGE.getSuccess, data)
        }
    }, (error) => {
        return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest,  productConstant.MESSAGE.addError, error)
    })
}

const updateproduct = async (req) => {
    return service.updateproduct(req).then((data) => {
        console.log(data)

        if (data && data == 1) {
            console.log("wait")
            return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest,  productConstant.MESSAGE.addError, data)
        } else {

            return resHeandlear.requestResponse(true, constant.HTTP_CODE.ok,  productConstant.MESSAGE.getSuccess, data)
        }
    }, (error) => {

        return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest,  productConstant.MESSAGE.addError, error)
    })
}

const deleteproduct = async (req) => {
    return service.deleteproduct(req).then((data) => {
        if(data && data == 1) {
            return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest , productConstant.MESSAGE.addError ,data) 
        } else {
            return resHeandlear.requestResponse(true, constant.HTTP_CODE.ok,productConstant.MESSAGE.addSuccess ,data) 
        }
    } , (error) => {
        return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest,productConstant.MESSAGE.addError ,error)
    })
}

const allproduct = async (req) => {
    return service.allproduct(req).then((data) => {
        if (data && data == 1) {
            return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.addError, data)
        } else {
            return resHeandlear.requestResponse(true, constant.HTTP_CODE.ok, productConstant.MESSAGE.getSuccess, data)
        }
    }, (error) => {
        return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.addError, error)
    })
}

module.exports = {
    addproduct,
    updateproduct,
    deleteproduct,
    allproduct
}