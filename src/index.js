import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './index.css';
import Index from './Index2';
import System from './System';
import UserPages from './UserPages';
import UserActions from './UserActions';
import GuestSplash from './GuestSplash';
import DriverActions from './DriverActions';
import DefaultTemplate from "./DefaultTemplate.js";


import * as serviceWorker from './serviceWorker';


ReactDOM.render(  <HashRouter><Index></Index></HashRouter>, document.getElementById('root') );





serviceWorker.unregister();
