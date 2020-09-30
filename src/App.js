import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
//import './jquery-3.3.1.min.js';
//import './bootstrap.min.js';


function App() {
  return (
    <div id="whole">
        
        <div id="intro_screen" class="card">
            <div class="card-body" id="intro_text">
                <h1 id="logo_name">Canvas</h1>
                <p>Welcome to the Canvas app! In here, you can browse all your classes, view new messages, check for announcements on your classes, among other things. But first, a little introduction on the app!</p>
                <p><button class="btn btn-lg btn-dark">Let's Get Started!</button></p>
            </div>
        </div>
        
        <script type="text/javascript" src="jquery-3.3.1.min.js"></script>
        <script type="text/javascript" src="bootstrap.min.js"></script>
    </div>
    
  );
}

export default App;
