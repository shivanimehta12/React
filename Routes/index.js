const userRoute = require('../Modules/user_module/userRouter')
const productRoute = require('../Modules/product_module/productRouter')

module.exports = (app) => {

    // employee route
    app.use('/api/user', [userRoute]);
    app.use('/api/product',[productRoute]);

}