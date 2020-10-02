import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

function UserMenu(){
	return ( 
		<div id="user_menu">
			<NavLink to="/logout" className="btn btn-warning">Log Out</NavLink>
			<NavLink to="/cart" className="btn btn-dark">Cart (<span id='cart_num'>0</span>)</NavLink>
			<NavLink to="/index" className="btn btn-light">Back to Menu</NavLink>
		</div>
	 );
}

export default UserMenu;