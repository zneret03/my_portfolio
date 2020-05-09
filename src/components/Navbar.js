import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Nav extends React.Component
{
    render()
    {
        return (
            <div>
                <nav className="navbar navbar-expand-lg" id="nav">
                    <div className={(this.props.navbar  ? 'collapse navbar-collapse p-3 sticky' : 'collapse navbar-collapse removeSticky')} id="NavbarContent" >
                        <ul className="navbar-nav nav mx-auto">
                                <li className="nav-item">
                                    <AnchorLink href="#landingPage" 
                                    className="nav-link nav-link-color animated fadeInDown mr-5 line">
                                     HOME</AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink href="#about" 
                                    className="nav-link nav-link-color animated fadeInDown mr-5 line">
                                     ABOUT ME</AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink href="#skills" 
                                    className="nav-link nav-link-color animated fadeInDown mr-5 line">
                                    SKILLS</AnchorLink>
                                </li>
                                <li className="nav-item mr-5">
                                    <AnchorLink href="#work"
                                     className="nav-link nav-link-color animated fadeInDown mr-5 line">
                                     MY WORK</AnchorLink>
                                </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
    
}
      
export default Nav; 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      