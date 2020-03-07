import React from 'react';

    const About = () => 
    {
        return(
            <div>
                 <div class="container" id="about_me">
                   <div class="row">
                    <div class="col-lg-6">
                    <img class="img" src={require('./image/me.jpg')} alt=""/>
                    </div>
                    <div class="col-lg-6">
                    <div class="about-me">
                    <h1 class="about">About</h1>
                      <h1 class="font-weight-bold hi">Hi!</h1>
                      <h1 class="font-weight-bold hi">I'm Ian.</h1>
                      <p>I'm a student of Iloilo Science and Technology University Enjoying taking complex problem
                        and turning into beautiful functional and interface design. I also love logic and structure of coding
                        and always strive to write and elegant and self documented code. For me code is like an art that
                        you can explore and make your ideas turn into reality. Using the powerful technology that exist 
                        in todays century.
                      </p>
                      <p>When im not in coding you will find me working out and wondering with my friends ang reading</p>
                    </div>
                    </div>
                  </div>
             </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
          </div>
        );
    }

export default About;