import React from 'react';
import Home from '../page/Home.jsx';
import About from '../page/About.jsx';
import Skills from '../page/skills.jsx';
import Work from '../page/Work.jsx';
import Footer from './footer.jsx';
import Contact from '../page/contact.jsx';

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
