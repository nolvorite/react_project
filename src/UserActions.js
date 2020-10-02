import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './bootstrap.min.css';
import './App.css';

import DefaultTemplate from "./DefaultTemplate.js";

function Cart(){
	return (<div id="container-fluid"><div className="row"><div className="col-sm-10 offset-sm-1"><img src={require('./images/Big Uncle Thumbnail.jpg')} className="img-fluid" alt="..." /><br /><br /></div><table id="cart" className="table table-hover table-condensed">
    				<thead>
						<tr>
							<th width='45%'>Product</th>
							<th width='25%'>Price</th>
							<th width='30%'></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td data-th="Product">
								<div className="row">
									<div className="col-sm-2 hidden-xs"><img src={require('./images/Bagnet.jpg')} alt="..." className="img-fluid"/></div>
									<div className="col-sm-10">
										<h4 className="nomargin">Bagnet</h4>
										<p>Crispy Bagnet</p>
									</div>
								</div>
							</td>
							<td data-th="Price">$1.99</td>
							<td className="actions" data-th="">
				
								<button className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i>Remove</button>								
							</td>
						</tr>
					</tbody>
					<tfoot><tr><td></td>
							<td className="text-right" colSpan="2">
								<strong>Total:</strong> <span id='total'>9.99</span><br />
								<NavLink to="/checkout" className="btn btn-primary">Finish Ordering!</NavLink>
							</td>	
					
						</tr>
					</tfoot>
					</table></div></div> );
}

function Checkout(){
	return (<div id="container-fluid"><div className="row"><div className="col-sm-10 offset-sm-1"><img src={require('./images/Big Uncle Thumbnail.jpg')} className="img-fluid" alt="..." /><br /><br /></div>

	<div className="col-sm-10 offset-sm-1">
		<table className="table table-sm" border="0" cellPadding="0" cellSpacing="0">
        <tbody><tr>
            <td align="center"  bgcolor="#eeeeee">
                <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" >
                    <tbody><tr>
                        <td align="center" valign="top"  bgcolor="#F44336">
                            <h1 >Confirmation</h1>
                        </td>
                    </tr>
                    <tr>
                        <td align="center"  bgcolor="#ffffff">
                            <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" >
                                <tbody><tr>
                                    <td align="center" colSpan="2"> <img src='https://img.icons8.com/carbon-copy/100/000000/checked-checkbox.png' className="img-fluid" /><br />
                                        <h2 > Thank You For Your Order! </h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" colSpan="2">
                                        <p > Thank you for doing business with us. We are now processing your order. You can check the status by pressing on the track button bellow </p>
                                    </td>
                                </tr>
                                <tr>

                                    <td width="75%" align="left" > Purchased Item (1) </td>
                                    <td width="25%" align="left" > $100.00 </td>

                                </tr>
                                <tr>

                                    <td width="75%" align="left" > TOTAL </td>
                                    <td width="25%" align="left" id="total" > $115.00 </td>
         
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" height="100%" valign="top" width="100%"  bgcolor="#ffffff" colSpan="2">
                            <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" >
                                <tbody><tr>
                                    <td align="center" valign="top" >
                                        <div >
                                            <table align="left" border="0" cellPadding="0" cellSpacing="0" width="100%" >
                                                <tbody><tr>
                                                    <td align="left" valign="top" >
                                                        <p >Delivery Address</p>
                                                        <p>Cubao, Quezon City<br />11th Floor<br />Quezon City, 1102</p>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        </div>
                                        <div >
                                            <table align="left" border="0" cellPadding="0" cellSpacing="0" width="100%" >
                                                <tbody><tr>
                                                    <td align="left" valign="top" >
                                                        <p >Estimated Delivery Date</p>
                                                        <p>October 2, 2020</p>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        </div>
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center"  bgcolor="#1b9ba3">
                            <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" >
                                <tbody><tr>
                                    <td align="center" >
                                        <h2 > Click the button below to track your order. </h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" >
                                        <table border="0" cellSpacing="0" cellPadding="0">
                                            <tbody><tr>
                                                <td align="center"  bgcolor="#66b3b7"> <NavLink to="/delivery">Track Order</NavLink> </td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center"  bgcolor="#ffffff">
                            <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" >
                                <tbody><tr>
                                </tr>
                                <tr>
                                    <td align="center" >
                                        <p > Big Uncle's Kitchen<br /> Lapu-Lapu-City, Cebu </p>
                                    </td>
                                </tr>
                                <tr>
                                    
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                </tbody></table>
            </td>
        </tr>
    </tbody></table>

	</div>

	</div></div>)
}

function fullRender(){
    return ( <DefaultTemplate content={Cart} /> )
}

function fullRender2(){
    return ( <DefaultTemplate content={Checkout} /> )
}



export default {cart: fullRender, checkout: fullRender2};