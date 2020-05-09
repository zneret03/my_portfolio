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
                    <div className={(this.props.navbar  ? 'collapse navbar-collapse p-3 sticky' : 'collapse navbar-collapse removeSticky')} id="NavbarContent"> 
                        <ul className="navbar-nav nav mx-auto   ">
                                <li className="nav-item">
                                    <AnchorLink href="#landingPage" 
                                    className="nav-link nav-link-color animated fadeInDown ml-3 mr-5 line">
                                    <i>{home}</i> HOME</AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink href="#about" 
                                    className="nav-link nav-link-color animated fadeInDown ml-3  mr-5 line">
                                    <i>{about}</i> ABOUT ME</AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink href="#skills" 
                                    className="nav-link nav-link-color animated fadeInDown ml-3 mr-5 line">
                                   <i>{skills}</i> SKILLS</AnchorLink>
                                </li>
                                <li className="nav-item mr-5">
                                    <AnchorLink href="#work"
                                     className="nav-link nav-link-color animated fadeInDown ml-3 line">
                                     <i>{work}</i> MY WORK</AnchorLink>
                                </li>
                                <li className="nav-item mr-5">
                                    <AnchorLink href="#contact"
                                     className="nav-link nav-link-color animated fadeInDown ml-3 line">
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      