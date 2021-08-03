import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios  from 'axios';
import errorHandler from '../utils/functions';
import { set } from 'mongoose';
import { NavLink } from 'react-router-dom';

export function ListUser(props) {
    // var baseUrl = " http://localhost:4000/api/product/allproduct";
    //     // var baseUrl = "http://localhost:3000/jwt/";

    const [user, setUser] = useState([]);

    useEffect (()=>{
        axios.get('http://localhost:4000/api/user/alluser').then(
            (res)=>{
                console.log(res.data.data);
                setUser(res.data.data);
            }
        )

    }, [])

    function doAction(id){
        // var id=e.target.value
         
            axios.delete(`http://localhost:4000/api/user/deleteuser/${id}`).then(
            (res)=>{
                console.log(res.data.data);


                // window.location.reload(false)
                axios.get('http://localhost:4000/api/user/alluser').then(
                    (res)=>{
                        console.log(res.data.data);
                        setUser(res.data.data);
                    }
                )
        
                
            }
        )
       
}

function doUpdate (_id){
    const id = _id;
        props.history.push(`/dashboard/Signup/${id}`);
}

    

    var ListUser = user.map((us)=>{
        
        return <tr key={us._id}>
        <td>{us.urs_name}</td>
        <td>{us.urs_password}</td>
        <td>{us.urs_email}</td>
        <td>{us.urs_address}</td>
        <td><button onClick={()=>{doUpdate(us._id)}}>Update</button></td>
        <td><button onClick={()=>{doAction(us._id)}}>Delete</button> </td>    
            
        </tr>
    })

    return (
        <div class="container-fluid">
        <h1 class="mt-4">Tables</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item"><a><NavLink to="/dashboard">Dashboard</NavLink></a></li>
            <li class="breadcrumb-item active">Tables</li>
        </ol>
     
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-table mr-1"></i>
                User List
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>address</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>address</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </tfoot>
                        <tbody>
                           {ListUser}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}

