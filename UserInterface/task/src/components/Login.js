import React, { useState } from 'react';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import {NavLink, Route, Switch} from 'react-router-dom';
import {baseUrl,appIdentifier } from '../config';
import  jwt  from 'jwt-decode';


function Login(props) {

    const [cookies, setCookie, removeCookie] = useCookies(['isLoggedIn']);
    const [urs_email, seturs_email] = useState("");
    const [urs_password, seturs_password] = useState("");

    if(cookies.isLoggedIn=="true")
    {
        props.history.push('/dashboard');
    }
    
    
    function sendData()
    {
        var data = {
            urs_email,urs_password
        }
            axios.post(baseUrl+"user/login",data ).then((res)=>{
                alert(JSON.stringify(res.data));
                // if(res.data.message=="Data get successfully.")
                if(res.data.status==200)
                {

                    const token = res.data.data.token;
                    const user = jwt(token); // decode your token here
                    localStorage.setItem('token', token);
                    localStorage.setItem(appIdentifier+'User', JSON.stringify(user));
                    props.history.push('/dashboard');
                }
                else{
                    alert("in else");
                }
            
            });
    }

    function setValues(e)
    {
        e.target.name == "urs_email" && seturs_email(e.target.value);
        e.target.name == "urs_password" && seturs_password(e.target.value);
    }


    return (
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                    <div class="card-body">
                        <form>
                        <div class="form-group">
                                <label class="small mb-1" for="inputurs_emailAddress">Email</label>
                                <input name="urs_email" value={urs_email} onChange={(e)=>{setValues(e);}} class="form-control py-4" id="inputurs_emailAddress" type="urs_email" placeholder="Enter Email Address" />
                            </div>
                            <div class="form-group">
                                <label class="small mb-1" for="inputurs_password">Password</label>
                                <input name="urs_password" value={urs_password} onChange={(e)=>{setValues(e);}} class="form-control py-4" id="inputurs_password" type="password" placeholder="Enter Password" />
                            </div>       
                            <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                
                                <a class="btn btn-primary" onClick={sendData}>Login</a>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <div class="small"><a> <NavLink to="/signup"> Need an account? Sign up!</NavLink></a></div>
                    </div>
               
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login
