//import React, { Component } from 'react'
import React from 'react';

class About_me extends React.Component
{
  render()
  {
    return(
      <div id="about">
        <h1 className="about font-weight-bold wow fadeInRight">ABOUT</h1>
        <div className="name-tag-line wow fadeInRight"></div>
           <div className="container about_me" >
             <div className="row">
              <div className="col-lg-6">
              <img className="img-about photo wow fadeInLeft" src={require('./image/me.jpg')} alt=""/>
              </div>
              <div className="col-lg-6">
              <div className="about-me wow fadeInRight">
                <h1 className="font-weight-bold hi">Hi!</h1>
                <h1 className="font-weight-bold hi"> I'm Ian.</h1>
                <p>I'm a student of Iloilo Science and Technology University Enjoying taking complex problem
                  and turning into beautiful functional and interface design. I also love logic and structure of coding
                  and always strive to write and elegant and self documented code. For me code is like an art that
                  you can explore and make your ideas turn into reality. Using the powerful technology that exist 
                  in todays century.
                </p>
                <p>When im not in coding you will find me working out and wondering with my friends and reading.</p>
              </div>
              </div>
            </div>
       </div>
        </div>
  );
  }
}

export default About_me;