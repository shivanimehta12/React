import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router } from 'react-router-dom'
import {NavLink, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import { ListProduct } from './components/ListProduct';
import AddProduct from './components/AddProduct';
import { ListUser } from './components/ListUser';

function App() {

  


  return (
    <Router>

                  <Switch>
                        <Route path="/" exact component={Login} /> 
                        <Route path="/signup" exact component={SignUp} /> 
                        <Route path="/dashboard"  component={Dashboard} />
                        <Route path="/list-product" component={ListProduct}/>
                        <Route path="/list-user" component={ListUser}/>
                        <Route path="/add-product" component={AddProduct}/>
                  </Switch>

    </Router>
  );
} 

export default App;



