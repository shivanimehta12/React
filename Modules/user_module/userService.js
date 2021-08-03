const db = require('../../Model/user')
const jwt = require ('jsonwebtoken')
const validate = require('./userValidation')
jwtKey = "jwt" 


const adduser = async (req) => {
    const urs_email = req.body.urs_email
    //console.log(urs_email)
    const findEmail = await db.findOne({ urs_email })

    if (findEmail) {
        return 1;
    }
    else {
        const newUser = new db(req.body)
        const saveUser = await newUser.save()
        return saveUser
    }
}

const login = async (req, res) => {
    const email = req.body.urs_email;
    const password = req.body.urs_password;
    const user = await db.findOne({ urs_email: email });
    if (!user) {
        //console.log("123")
        return 1;
    } else {
        //console.log('wait')
        if(password == user.urs_password) {
        
            try{
                const token = await jwt.sign({user},jwtKey);
                await db.updateOne({urs_token: token})
                return {token};
            }catch(err){
                console.log(err);
            }
             
        }
    else{
        console.log('wait1 2')
        return 1;
    }
    }
}

let addAdmin = async (req) => {
    const addAdmin = await db.findOne({ urs_role: "Admin" })
    if (!addAdmin) {
        const creatAdmin = {
            urs_name: "Admin",
            urs_email: "admin@gmail.com",
            urs_password: "123",
            urs_address: "ahmedabad",
            urs_role: "Admin"
        }
        let saveUser = new db(creatAdmin)

        return saveUser.save().then((result) => {
            return result;
        })
    }
    login()
}

const updateUser = async (req,res)=>{
    try
    {
        let id = req.params.id
        let checkUser = await db.find({_id: id})
        if( checkUser.length > 0) {
            let updateUser = await db.updateOne(
                {_id:id},
                {
                    urs_name: req.body.urs_name,
                    urs_email: req.body.urs_email,
                    urs_address: req.body.urs_address
                }
            )
            return updateUser
        }else 
            {
            return 1;
            }
    }catch (error){
        return 1 
        console.log (error)
    }
}

const deleteUser = async (req,res)=>{
    try
    {
        let id = req.params.id
        console.log(id)
        //let checkUser = await db.find({_id: id})
        let deleteUser = await db.deleteOne({_id: id})
        if( deleteUser) {
            
            return deleteUser
        }else 
            {
            return 1;
            }
    }catch (error){
        return 1 
        console.log (error)
    }
}

const getUser = async (req)=>{
    try
    {
       {
            const getUser = await db.find({_id:req.params._id})
            if(getUser){
            console.log(getUser)
            return getUser
            }
            else
            return 1
        }
    }catch(e){
        console.log(e)
    }
}

const allUser = async (req)=> {
    try {
        
        const allUser = await db.find()
        return allUser
    }catch (error){
        return 1 
        console.log (error)
    }
}

module.exports = {
    adduser,
    login,
    addAdmin,
    updateUser,
    deleteUser,
    getUser,
    allUser
    //list & get 
}