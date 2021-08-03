import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {NavLink, Route, Switch} from 'react-router-dom';
function SignUp(props) {

    const [urs_name, seturs_name] = useState("");
    const [urs_email, seturs_email] = useState("");
    const [urs_password, seturs_password] = useState("");
    const [urs_address, seturs_address] = useState("");
    // const [role, setrole] = useState("");

    var stId = props.match.params.id;
    //alert(stId)
    useEffect(() => {
        if(stId){
        axios.get('http://localhost:4000/api/user/alluser').then(
            (res)=>{
                var p= res.data.data.filter((user)=>{
                    return user._id == stId 
                })
                seturs_name(p[0].urs_name);
                seturs_email(p[0].urs_email);
                seturs_password(p[0].urs_password);
                seturs_address(p[0].urs_address);
            }
        )
        }
        
    }, [])

    function googleLogin()
    {
       //axios call will not work for oauth purpose as it is aynchronus so need to send synchronus request to server
        window.location.href="http://localhost:3000/auth/google"
    }

    function sendData()
    {
        var data = {
            urs_name,urs_email,urs_password,urs_address
        }
            axios.post("http://localhost:4000/api/user/adduser",data ).then((res)=>{
                alert(JSON.stringify(res.data));
            });
    }

    function update()
        {
            // console.log('wait')
            var data = {
                urs_name,urs_email,urs_password,urs_address
            }
                axios.put(`http://localhost:4000/api/user/updateuser/${stId}`,data ).then((res)=>{
                    alert(JSON.stringify(res.data));
                });
        }

    function setValues(e)
    {
        e.target.name == "urs_name" && seturs_name(e.target.value);
        e.target.name == "urs_email" && seturs_email(e.target.value);
        e.target.name == "urs_password" && seturs_password(e.target.value);
        e.target.name == "urs_address" && seturs_address(e.target.value);
        // e.target.urs_name == "role" && setrole(e.target.value);
    }


    return (
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Register</h3></div>
                    <div class="card-body">
                        <form>
                            product ID is {stId}
                            <div class="form-group">
                                <label class="small mb-1" for="inputurs_name">User Name</label>
                                <input name="urs_name" value={urs_name} onChange={(e)=>{setValues(e);}} class="form-control py-4" id="inputurs_name" type="text" placeholder="Enter User Name" />
                            </div>
                            <div class="form-group">
                                <label class="small mb-1" for="inputurs_emailurs_address">User Email</label>
                                <input name="urs_email" value={urs_email} onChange={(e)=>{setValues(e);}} class="form-control py-4" id="inputurs_emailurs_address" type="urs_email" placeholder="Enter User Email" />
                            </div>
                            <div class="form-group">
                                <label class="small mb-1" for="inputurs_password">User Password</label>
                                <input name="urs_password" value={urs_password} onChange={(e)=>{setValues(e);}} class="form-control py-4" id="inputurs_password" type="urs_password" placeholder="Enter User Password" />
                            </div>                           
                            <div class="form-group">
                                <label class="small mb-1" for="inputurs_address">User City</label>
                                <select name="urs_address" value={urs_address} onChange={(e)=>{setValues(e);}} class="form-control" id="inputurs_address"type="urs_address" placeholder="Select user City"  >
                                    <option  value="Jaipur"  >Jaipur</option>
                                    <option  value="Pune"  >Pune</option>
                                    <option  value="Mumbai"  >Mumbai</option>
                                    <option  value="Chandigarh"  >Chandigarh</option>
                                    <option  value="Goa"  >Goa</option>
                                    <option  value="Banglore"  >Banglore</option>
                                </select>
                            </div>
                            <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                { stId && <a class="btn btn-primary" onClick={update}  >Update</a> }
                                 { !stId && <a class="btn btn-primary" onClick={sendData}  >Submit</a> }
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <div class="small"><a > <NavLink to="/"> already registered ? SignIn</NavLink></a></div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp
