import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './index.css';
import System from './System';
import UserPages from './UserPages';
import UserActions from './UserActions';
import GuestSplash from './GuestSplash';
import DriverActions from './DriverActions';
import DefaultTemplate from "./DefaultTemplate.js";
import $ from 'jquery';

import * as serviceWorker from './serviceWorker';

class Index extends React.Component {
	componentDidMount(){
		//on load

		function updateCartCount(){
			$("#cart_num").text(System.cart.length);
		}

		function pageLoad(event){
			updateCartCount();
		}

		function searchIfExists(listVar,propertyToSearch,query){
			var itemExists = false;
			var dataToFetch = null;
			if(typeof listVar === "object"){
				for(var i in listVar){
					var dt = listVar[i];
					console.log(dt);
					if(dt[propertyToSearch]+"" === query+""){
						var itemExists = true;
						var dataToFetch = dt;
					}
				}
			}
			return {exists: itemExists, data: dataToFetch};
		}

		$(document).ready(function(event){
			pageLoad(event);
		});
		
		$(window).on("hashchange",function(event){
			
			//check window
			pageLoad(event);

		});

		$("body").on("click",".addtocard",function(event){
			var currentElem = $(event.target);
			if(!searchIfExists(System.cart,'item_id',currentElem.attr("itemId")).exists){
				var itemData = searchIfExists(System.items,'item_id',currentElem.attr("itemId"));
				System.cart[System.cart.length] = itemData.data;
				
				updateCartCount();
			}else{
				alert("You have already selected this item.");
			}

		});

			
		$("body").on("click","#signin_test",function(event){
			event.preventDefault();
			var usernameCheck = $("[name=username]").val();
			var passwordCheck = $("[name=password]").val();

			if(usernameCheck !== "" && passwordCheck !== ""){
				var dataCheck = searchIfExists(System.users,'username',usernameCheck);
				if(dataCheck.exists){
					if(passwordCheck !== dataCheck.data.password){
						alert("Incorrect username/password combination.");
					}else{
						alert("Successfully logged in.");
						System.isLoggedIn = true;
						System.currentlyLoggedIn = dataCheck;
						this.setState();
						window.location.hash = '/';

					}
				}else{
					alert("Email address is not registered.");
				}
			}else{
				alert("Please fill in the login details.");
			}

		});

	}
	constructor(){
		super();
	}
	render(){
		return (
			  	<div id='root'>
			    {((GuestSplash,UserPages,System) => {

			    	//deliveryMode

			  		if(System.isLoggedIn){

			  			return ( <wrapper>
			  				<Route exact path="/index" component={GuestSplash.home}></Route>
			  				<Route exact path="/" component={GuestSplash.home}></Route>
			  				<Route exact path="/cart" component={UserActions.cart}></Route>

			  				<Route exact path="/checkout" component={UserActions.checkout}></Route>
			  				<Route exact path="/delivery" component={DriverActions.delivery}></Route>
			  				</wrapper> )
			  		}else{
			  			return ( <wrapper><Route exact path="/" component={GuestSplash.login}></Route>
			  			<Route path="/signin" component={UserPages.signin}></Route>
			  			<Route path="/signup" component={UserPages.signup}></Route></wrapper> )
			  		}
				})(GuestSplash,UserPages,System)}

				</div>
			 
		)
	}
}

export default Index;