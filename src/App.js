import React from 'react';
import WOW from 'wowjs';
import './App.css';
import { Router } from "@reach/router";
import Root from './components/Root.jsx';
  
  window.wow = new WOW.WOW({
      offset : '80',
      mobile : true,
      boxClass : 'wow',
      animateClass : 'animated',
      live : true,
      scrollContainer : null
    }
  );
  window.wow.init();
 
  class App extends React.Component
  {
    render(){
        return(
          <Router >
            <Root path="/"/>
          </Router>
        );
    }
  }
  
export default App;
