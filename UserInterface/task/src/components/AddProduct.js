import React, { useState, useEffect } from 'react'
import axios from 'axios';


export default function AddProduct(props) {




    const [prd_name, setprd_name] = useState("");
    const [prd_price, setprd_price] = useState("");
    const [prd_type, setprd_type] = useState("");

    var stId = props.match.params.id;
    //alert(stId)

    useEffect(() => {
        if (stId) {
            axios.get('http://localhost:4000/api/product/allproduct').then(
                (res) => {
                    // console.log(res,"res")
                    var p = res.data.data.filter((product) => {
                        return product._id == stId
                    })
                    setprd_name(p[0].prd_name);
                    setprd_price(p[0].prd_price);
                    setprd_type(p[0].prd_type);
                }
            )
        }

    }, [])

    // function googleLogin()
    // {
    //    //axios call will not work for oauth purpose as it is aynchronus so need to send synchronus request to server
    //     window.location.href="http://localhost:3000/auth/google"
    // }

    function send() {
        // console.log('wait')
        var data = {
            prd_name, prd_price, prd_type
        }
        axios.post(" http://localhost:4000/api/product/addproduct", data).then((res) => {
            alert(JSON.stringify(res.data));
        });
    }
    function update() {
        // console.log('wait')
        var data = {
            prd_name, prd_price, prd_type
        }
        axios.put(`http://localhost:4000/api/product/updateproduct/${stId}`, data).then((res) => {
            alert(JSON.stringify(res.data));
        });
    }


    function setValue(e) {
        e.target.name == "prdname" && setprd_name(e.target.value);
        e.target.name == "prd_price" && setprd_price(e.target.value);
        e.target.name == "prd_type" && setprd_type(e.target.value);
        // e.target.urs_name == "role" && setrole(e.target.value);
    }



    return (

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                        <div class="card-header"><h3 class="text-center font-weight-light my-4">Add Product</h3></div>
                        <div class="card-body">
                            <form>
                                product ID is {stId}
                                <div class="form-group">
                                    <label class="small mb-1" for="inputprd_name"> Product Name</label>
                                    <input name="prdname" value={prd_name} onChange={(e) => { setValue(e) }} class="form-control py-4" id="inputprd_name" type="text" placeholder="Product Name" />
                                </div>
                                <div class="form-group">
                                    <label class="small mb-1" for="inputprd_price">Product Price</label>
                                    <input name="prd_price" value={prd_price} onChange={(e) => { setValue(e) }} class="form-control py-4" id="inputprd_price" type="text" placeholder="Product Price" />
                                </div>
                                <div class="form-group">
                                    <label class="small mb-1" for="inputprd_type">Prodcut Type</label>
                                    <input name="prd_type" value={prd_type} onChange={(e) => { setValue(e) }} class="form-control py-4" id="inputprd_type" type="text" placeholder="Product Type" />
                                </div>
                                <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                    {stId && <a class="btn btn-primary" onClick={update}  >Update</a>}
                                    {!stId && <a class="btn btn-primary" onClick={send}  >Submit</a>}
                                </div>
                            </form>
                        </div>
                        {/* <div class="card-footer text-center">
                                        <div class="small"><a href="register.html">Need an account? Sign up!</a></div>
                                    </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

