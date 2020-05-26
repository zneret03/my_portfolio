import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faQuestionCircle, faBrain, faWrench, faAddressCard} from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Nav extends React.Component
{
    render()
    {
        const home = <FontAwesomeIcon icon={faHome} />
        const about = <FontAwesomeIcon icon={faQuestionCircle} />
        const skills = <FontAwesomeIcon icon={faBrain} />
        const work = <FontAwesomeIcon icon={faWrench} />
        const contact = <FontAwesomeIcon icon={faAddressCard} />
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-nav" id="nav">
                    <div className={(this.props.navbar  ? 'collapse navbar-collapse p-3 sticky shadow-sm p-3 mb-5 bg-white rounded' 
                    : 'collapse navbar-collapse p-3 removeSticky ')} id="NavbarContent"> 
                        <a className="navbar-brand ml-4">LOGO</a>
                        <ul className="navbar-nav nav">
                                <li className="nav-item mr-2">
                                    <AnchorLink href="#landingPage" 
                                    className="nav-link nav-link-color animated fadeInDown line">
                                    <i>{home}</i> HOME</AnchorLink>
                                </li>
                                <li className="nav-item mr-2">
                                    <AnchorLink href="#about" 
                                    className="nav-link nav-link-color animated fadeInDown  line">
                                    <i>{about}</i> ABOUT ME</AnchorLink>
                                </li>
                                <li className="nav-item mr-2">
                                    <AnchorLink href="#skills" 
                                    className="nav-link nav-link-color animated fadeInDown line">
                                   <i>{skills}</i> SKILLS</AnchorLink>
                                </li>
                                <li className="nav-item mr-2">
                                    <AnchorLink href="#work"
                                     className="nav-link nav-link-color animated fadeInDown line">
                                     <i>{work}</i> MY WORK</AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink href="#contact"
                                     className="nav-link nav-link-color animated fadeInDown line">
                                     <i>{contact}</i> CONTACT</AnchorLink>
                                </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
    
}
      
export default Nav; 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      