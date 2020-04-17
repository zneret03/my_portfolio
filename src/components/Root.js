import React from 'react';
import Home from './Home';
import About from './About.js';
import Skills from './skills.js';
import Work from './Work.js';
import Footer from './footer.js';
import Contact from './contact';

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
