import React from 'react';
import Home from '../page/Home';
import About from '../page/About.js';
import Skills from '../page/skills.js';
import Work from '../page/Work.js';
import Footer from './footer.js';
import Contact from '../page/contact.js';

class Root extends React.Component
{
    render()
    {
        const alt = "Image";
            return(
            <div>
                <Home  Image={alt}/>
                <About />
                <Skills />
                <Work />
                <Contact/>
      		    <Footer />
            </div>
        );
    }
}


export default Root;
