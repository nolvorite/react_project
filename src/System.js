import React from 'react';
import ReactDOM from 'react-dom';

class System {
	constructor(){
		//
	}
	
}

System.isLoggedIn = true; //false;
System.users = [
	{
		username: 'hans_marcon', 
		password: 'a password', 
		first_name: 'Hans', 
		last_name: 'Marcon', 
		email: 'hns_marcon@hotmail.com', 
		user_id: 1
	}
];

System.items = [
	{item_id: 1, name: 'Bagnet', price: 19.00},
	{item_id: 2, name: 'Sisig', price: 14.00},
	{item_id: 3, name: 'Chicken Feet', price: 9.00},
];

System.cart = [];
System.currentlyLoggedIn = {
	username: 'hans_marcon', 
	password: 'a password', 
	first_name: 'Hans', 
	last_name: 'Marcon', 
	email: 'hns_marcon@hotmail.com', 
	user_id: 1
};
System.deliveries = [];

export default System;