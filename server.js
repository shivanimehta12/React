'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const useRouter = require('./Modules/user_module/userRouter')
const productRouter = require('./Modules/product_module/productRouter')
        
const dbConfig = require('./config/dbConnection');
const Routes = require('./Routes');

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, async () => {

    console.log(`1, Server running at port no. ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
   // require('./routes')(app); // API route 
   require('./Routes')(app)
   //app.use('/',Routes)
    dbConfig.connectDb(); // DB connect and authenticate
});
 

 


 































// const express = require ('express');
// const app = express();
// const mongoose = require ('mongoose');


// mongoose.connect('mongodb+srv://Shoobham:Shubham@102@cluster0.boihb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/react',
// {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }
// ).then(()=>{console.warn("connection done");
// })


// app.listen(4000)