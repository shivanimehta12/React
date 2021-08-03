const service = require('./userService')
const resHeandlear = require('../../handlers/responseHandler')
const userConstant = require('./userContext')
const constant = require('../../utils/constant')


const adduser = async (req) => {
    return service.adduser(req).then((data) => {
        //console.log("stone"+ data)

        if (data && data === 1) {
            return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, userConstant.MESSAGE.emailExist, data)
        } else {
            return resHeandlear.requestResponse(true, constant.HTTP_CODE.ok, userConstant.MESSAGE.getSuccess, data)
        }
    }, (error) => {
        return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, userConstant.MESSAGE.addError, error)
    })
}

const login = async (req) => {
    return service.login(req).then((data) => {
        if (data && data == 1) {
            return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, userConstant.MESSAGE.loginError, data)
        } else {
            return resHeandlear.requestResponse(true, constant.HTTP_CODE.ok, userConstant.MESSAGE.getSuccess, data)
        }
    }, (error) => {
        return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, userConstant.MESSAGE.emailNotFound, error)
    })
}

const addAdmin = async (req) => {
    return service.addAdmin(req).then((data) => {
        console.log(data)

        if (data && data == 1) {

            return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, userConstant.MESSAGE.addError, data)
        } else {
            return resHeandlear.requestResponse(true, constant.HTTP_CODE.ok, userConstant.MESSAGE.getSuccess, data)
        }
    }, (error) => {
        //console.log("wait")
        return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, userConstant.MESSAGE.addError, error)
    })
}

const updateUser = async (req) => {
    return service.updateUser(req).then((data) => {
        console.log(data)

        if (data && data == 1) {
            console.log("wait")
            return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, userConstant.MESSAGE.addError, data)
        } else {
            
            return resHeandlear.requestResponse(true, constant.HTTP_CODE.ok, userConstant.MESSAGE.getSuccess, data)
        }
    }, (error) => {

        return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, userConstant.MESSAGE.addError, error)
    })
}

const deleteUser = async (req) => {
    return service.deleteUser(req).then((data) => {
        //console.log(data)

        if (data && data == 1) {
            //console.log("wait")
            return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, userConstant.MESSAGE.addError, data)
        } else {

            return resHeandlear.requestResponse(true, constant.HTTP_CODE.ok, userConstant.MESSAGE.getSuccess, data)
        }
    }, (error) => {

        return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, userConstant.MESSAGE.addError, error)
    })
}

const getUser = async (req) => {
    return service.getUser(req).then((data) => {
        console.log(data)

        if (data && data == 1) {
            //console.log("wait1")
            return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, userConstant.MESSAGE.addError, data)
        } 
        else {
            //console.log("wait")
            return resHeandlear.requestResponse(true, constant.HTTP_CODE.ok, userConstant.MESSAGE.getSuccess, data)

        }
    }, (error) => {

        return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, userConstant.MESSAGE.addError, error)
    })
}

const allUser = async (req) => {
    return service.allUser(req).then((data) => {
        if (data && data == 1) {
            return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, userConstant.MESSAGE.addError, data)
        } else {
            return resHeandlear.requestResponse(true, constant.HTTP_CODE.ok, userConstant.MESSAGE.getSuccess, data)
        }
    }, (error) => {
        return resHeandlear.requestResponse(false, constant.HTTP_CODE.badRequest, userConstant.MESSAGE.addError, error)
    })
}

module.exports = {
    adduser,
    login,
    addAdmin,
    updateUser,
    deleteUser,
    getUser,
    allUser
}