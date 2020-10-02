import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './bootstrap.min.css';
import './App.css';

import DefaultTemplate from "./DefaultTemplate.js";

function Delivery(){
	return (<wrapper><article className="card">
        <header className="card-header"> My Orders / Tracking </header>
        <div className="card-body">
            <h6>Order ID: OD45345345435</h6>
            <article className="card">
                <div className="card-body row">
                    <div className="col-sm-12"> <strong>Estimated Delivery time:</strong> <br />29 nov 2019 </div>
                    <div className="col-sm-12"> <strong>Shipping BY:</strong> <br /> BLUEDART, | <i className="fa fa-phone"></i> +1598675986 </div>
                    <div className="col-sm-12"> <strong>Status:</strong> <br /> Picked by the courier </div>
                    <div className="col-sm-12"> <strong>Tracking #:</strong> <br /> BD045903594059 </div>
                </div>
            </article>
            <div className="track">
                <div className="step active"> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Order confirmed</span> </div>
                <div className="step active"> <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text"> Picked by courier</span> </div>
                <div className="step"> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> On the way </span> </div>
                <div className="step"> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Ready for pickup</span> </div>
            </div>
            <hr />
           
            <a href="#" className="btn btn-warning" data-abc="true"> <i className="fa fa-chevron-left"></i> Back to orders</a>
        </div>
    </article></wrapper>)
}

function fullRender1(){
    return ( <DefaultTemplate content={Delivery} /> )
}


export default {delivery: fullRender1}