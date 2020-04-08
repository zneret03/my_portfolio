//import React, { Component } from 'react'
import React from 'react';

class About_me extends React.Component
{
  render()
  {
    return(
      <div id="about">
        <h1 class="about font-weight-bold wow fadeInRight">ABOUT</h1>
        <div class="name-tag-line wow fadeInRight"></div>
           <div class="container about_me" >
             <div class="row">
              <div class="col-lg-6">
              <img class="img-about photo wow fadeInLeft" src={require('./image/me.jpg')} alt=""/>
              </div>
              <div class="col-lg-6">
              <div class="about-me wow fadeInRight">
                <h1 class="font-weight-bold hi">Hi!</h1>
                <h1 class="font-weight-bold hi"> I'm Ian.</h1>
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