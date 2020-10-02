import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './bootstrap.min.css';
import './App.css';

import DefaultTemplate from "./DefaultTemplate.js";

function SigninPage(){
	return (
		<div id="container" className="container">
		<div className="row">
			<div className="col-sm-6 offset-sm-3"><img src={require('./images/Big Uncle Thumbnail.jpg')} className="img-fluid" alt="..." /></div>
			<div className="col-sm-12 offset-sm-3 text-center">
				<br /><br />
	                  <form>
	  <div className="form-group">
	    <label for="exampleInputEmail1">Username</label>
	    <input type="username" name="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
	    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
	  </div>
	  <div className="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
	  </div>
	 
	  <btn className="btn btn-primary" id="signin_test">Sign me in!</btn>
	</form>
				
				</div>
		</div>
		</div>
	);
}

function SignupPage(){
	return ( 
		<div id="signup_page">
			<div className="container">
	<div className="row">
		<div className="col-sm-10 offset-sm-1 text-center">
                    <h1>Welcome! </h1><br />
                  <form>
  <div className="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="email" className="form-control" id="Fname" aria-describedby="emailHelp" placeholder="Enter Given Name" />
   
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Last Name</label>
    <input type="password" className="form-control" id="Lname" placeholder="Enter Last Name" />
  </div>
					   <div className="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="newemail" aria-describedby="emailHelp" placeholder="Yourmail@mail.com" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Username</label>
    <input type="text" className="form-control" id="username" placeholder="Enter Desired Username" />
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Password</label>
    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="enterpassword" placeholder="Enter username" />
   
  </div>
  <button type="submit" className="btn btn-primary">Sign me up!</button><br /><br /><NavLink to="/" className="btn btn-warning">Go Back</NavLink>
</form>
			
			</div>
	</div>
	</div>
		</div> 
	);
}

function fullRender1(){
    return ( <DefaultTemplate content={SignupPage} /> )
}

function fullRender2(){
    return ( <DefaultTemplate content={SigninPage} /> )
}


export default {signup: fullRender1, signin: fullRender2};
