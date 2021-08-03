const product = require('../../Model/customer')

const addproduct = async (req) =>{
    const data = new product (req.body)
    const dataAdd = await data.save()
    if(!dataAdd){
        return 1;
    } 
    return dataAdd;
}

const updateproduct = async (req,res)=>{
    try
    {
        let id = req.params.id
        let checkUser = await product.find({_id: id})
        if( checkUser.length > 0) {
            let updateproduct = await product.updateOne(
                {_id:id},
                {
                    prd_name: req.body.prd_name,
                    prd_price: req.body.prd_price,
                    prd_type: req.body.prd_type
                }
            )
            return updateproduct
        }else 
            {
            return 1;
            }
    }catch (error){
        return 1 
        console.log (error)
    }
}

const deleteproduct = async (req,res)=>{
    try
    {
        let id = req.params.id
        let checkproduct = await product.find({_id: id})
        if( checkproduct.length > 0) {
            let deleteproduct = await product.deleteOne( {_id: id}  )
            return deleteproduct
        }else 
            {
            return 1;
            }
    }catch (error){
        return 1 
        console.log (error)
    }
}
const allproduct = async (req)=> {
    try {
        
        const allproduct = await product.find()
        return allproduct
    }catch (error){
        return 1 
        console.log (error)
    }
}
    
module.exports= {
    addproduct,
    updateproduct,
    deleteproduct,
    allproduct
}