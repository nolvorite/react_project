import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import UserMenu from './UserMenu'
import System from './System';


class DefaultTemplate extends React.Component {

    constructor(){
        super();
    }

    render() {
      return (
        <div className="whole-default">
            {((System) => {
                if(System.isLoggedIn){
                    return ( <UserMenu></UserMenu> )
                }
            })(System)}

            {this.props.content()}

        </div>
      );
    }

}

export default DefaultTemplate;