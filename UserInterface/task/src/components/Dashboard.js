import React, { Component } from 'react'
import $ from 'jquery';
import {NavLink, Route, Switch} from 'react-router-dom';

import {ListProduct} from './ListProduct';
import StudentDocument from './StudentDocument';
import ViewStudent from './ViewStudent';
import {baseUrl,appIdentifier } from '../config';
import Login from './Login';
import AddProduct from './AddProduct';
import { ListUser } from './ListUser';
import SignUp from './Signup';

export class Dashboard extends Component {

    componentDidMount()
    {


        (function($) {
            "use strict";
        
            // Add active state to sidbar nav links
            var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
                $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
                    if (this.href === path) {
                        $(this).addClass("active");
                    }
                });
        
            // Toggle the side navigation
            $("#sidebarToggle").on("click", function(e) {
                e.preventDefault();
                $("body").toggleClass("sb-sidenav-toggled");
            });
        })($);
        
    }
    
    render() {
        // const logout = () =>{
        //     <NavLink to = "/login"> </NavLink>
        // }
        return (
            <div>
                
                <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand" href="index.html">Start Bootstrap</a>
            <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>
            <tabel>
                <td>
                    
                </td>
            </tabel>
      
            <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div class="input-group">
                    
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
      
            <ul class="navbar-nav ml-auto ml-md-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="#">Settings</a>
                        <a class="dropdown-item" href="#">Activity Log</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/logout" >Logout</a>
                    </div>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                          
                            <div class="sb-sidenav-menu-heading">Actions</div>
                            {JSON.parse(localStorage.getItem(appIdentifier+"User")).user.urs_role=="Admin" &&
                             <NavLink className="nav-link" to="/dashboard/list-user">
                                <div className="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                List Users
                            </NavLink>}
                            <NavLink className="nav-link" to="/list-product">
                                <div className="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                List All Product
                            </NavLink>
                            { <NavLink className="nav-link" to="/dashboard/add-product">
                                <div className="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Add Product
                            </NavLink> }
                           
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <Switch>
                        <Route path="/dashboard/Signup/:id" component={SignUp}/>
                        <Route path="/dashboard/Signup" component={SignUp}/>                                              
                        <Route path="/dashboard/list-product" component={ListProduct} />
                        <Route path="/dashboard/list-user" component={ListUser}/>
                        {/* <Route path="/dashboard/upload-documents" component={StudentDocument} /> */}
                        <Route path="/dashboard/add-product/:id" component={AddProduct}/>
                        <Route path="/dashboard/add-product" component={AddProduct}/>
                        {/* <Route path="/dashboard/view-student/:id" component={ViewStudent} /> */}
                    </Switch>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2020</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
                
            </div>
        )
    }
}

export default Dashboard
