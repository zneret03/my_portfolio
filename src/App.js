import React from 'react';
//import React, { Component } from 'react'
import WOW from 'wowjs';
import Home from './components/Home';
import About from './components/About.js';
import Skills from './components/skills.js';
import Work from './components/Work.js';
import Footer from './components/footer.js';
import Contact from './components/contact';
import './App.css';


  document.body.style = "scroll-behavior: smooth;";
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
          <div>
                <Home />
                <About />
                <Skills />
                <Work />
                <Contact />
                <Footer />
            </div>
        );
    }
  }
  
export default App;
