import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './bootstrap.min.css';
import './App.css';

import DefaultTemplate from "./DefaultTemplate.js";

//import './jquery-3.3.1.min.js';
//import './bootstrap.min.js';

function HomePage(){
    return (<div id="home_menu">
        <div className="col-sm-10 offset-sm-1"><img src={require('./images/Big Uncle Thumbnail.jpg')} className="img-fluid" alt="..." /><br /><br /></div>
    <h1 class="text-center">Menu</h1>
            <div class="col text-center">Choose from any of our specialty!</div>
            <hr />
    <div class="row">

         <div class="col-sm-12">
            <div class="card">
  <img src={require('./images/Bagnet.jpg')} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Bagnet</h5>
    <p class="card-text">Crispy and Juicy Bagnet for only $19.</p>
    <button class="addtocard btn btn-success" itemId="1">Add to Cart</button>
  </div>
        </div>
            </div>
        <div class="col-sm-12">
            <div class="card">
  <img src={require('./images/sisig-recipe.jpg')} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Sisig</h5>
    <p class="card-text">Sisigfor only $14.</p>
    <button class="addtocard btn btn-success" itemId="1">Add to Cart</button>
  </div>
        </div>
            </div>
        <div class="col-sm-12">
            <div class="card">
  <img src={require('./images/chickenfeet-640.jpg')} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Chicken Feet</h5>
    <p class="card-text">Chicken Feet for only $9.</p>
    <button class="addtocard btn btn-success" itemId="1">Add to Cart</button>
  </div>
        </div>
            </div>
        </div>
        
        



</div> );
}

function LoginPage(){
    return (  <div id="login_page">   
        <div id="container" className="container">
    <div className="row">
        <div className="col-sm-10 offset-sm-1"><img src={require('./images/Big Uncle Thumbnail.jpg')} className="img-fluid" alt="..." /><br /><br /></div>
        <div className="col-sm-10 offset-sm-1 text-center">
                    <h2>Welcome to Big Uncle's Kitchen </h2><br />
                    <NavLink to="/signin" className="btn btn-primary">Sign In</NavLink>

            <h4 className="display-5">OR</h4>

                <NavLink to="/signup" className="btn btn-success">Sign Up</NavLink>
            </div>
    </div>    </div> </div>  )
}

function fullRender(){
    return ( <DefaultTemplate content={LoginPage} /> )
}

function fullRender2(){
    return ( <DefaultTemplate content={HomePage} /> )
}

export default {login: fullRender, home: fullRender2};
