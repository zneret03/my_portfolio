import React from 'react';
import Navbar from './navbar';
import Footer from './footer.js';
import About from './About.js';
import './App.css';


  //document.body.style = "background-color: #262626;";

   

  const App = () =>
  {
    return(
      <div>
            <div class="container split animated fadeIn">
              <div class="row">
                <div class="col-lg-6">
                <Navbar />
                  <div class="mt-5 main-info-section">
                    <h1>
                      <span class="font-weight-bold hvr-grow">H</span>
                      <span class="font-weight-bold hvr-grow">i</span>
                    </h1>
                    <h1>
                      <span class="font-weight-bold hvr-grow">I</span>
                      <span class="font-weight-bold hvr-grow">'</span>
                      <span class="font-weight-bold hvr-grow mr-2">m</span>
                      <span class="font-weight-bold text-danger hvr-grow"> I</span>
                      <span class="font-weight-bold text-danger hvr-grow"> a</span>
                      <span class="font-weight-bold text-danger hvr-grow"> n,</span>
                    </h1>
                    <h1>
                      <span class="font-weight-bold hvr-grow">F</span>
                      <span class="font-weight-bold hvr-grow">u</span>
                      <span class="font-weight-bold hvr-grow">l</span>
                      <span class="font-weight-bold hvr-grow">l</span>
                      <span class="font-weight-bold hvr-grow">s</span>
                      <span class="font-weight-bold hvr-grow">t</span>
                      <span class="font-weight-bold hvr-grow">a</span>
                      <span class="font-weight-bold hvr-grow">c</span>
                      <span class="font-weight-bold hvr-grow mr-2">k</span>
                      <span class="font-weight-bold hvr-grow"> D</span>
                      <span class="font-weight-bold hvr-grow"> e</span>
                      <span class="font-weight-bold hvr-grow"> v</span>
                      <span class="font-weight-bold hvr-grow"> e</span>
                      <span class="font-weight-bold hvr-grow"> l</span>
                      <span class="font-weight-bold hvr-grow"> o</span>
                      <span class="font-weight-bold hvr-grow"> p</span>
                      <span class="font-weight-bold hvr-grow"> e</span>
                      <span class="font-weight-bold hvr-grow"> r.</span>
                    </h1>
                    <p class="par-color">Css / Javascript / React / Nodejs</p>
                  </div>
                  </div> 
                  <div class="col-lg-6">
                  <div class="right">
                    <img src={require('./image/split.jpg')} alt=""/>
                  </div>
                  </div>
                </div> 
                <button type="button" class="btn-contact animated fadeIn">Contact me</button>
             </div>
             <About />
        </div>
    );
  }
export default App;
