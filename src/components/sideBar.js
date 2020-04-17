import React, {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
         
    const SideBar = (props) =>
    {
        const [sidebarclass, setSideBarClass] = useState(props.sidebar);
    
        const closeHandler = (e) =>{
            e.preventDefault();
            setSideBarClass("sideBar closebtn");
            props.close();
        }
        
        return(
            <div>
                <div className="sideBar">
                    <button className={sidebarclass} onClick={closeHandler}>×</button>
                    <ul className="navbar-nav nav"> 
                        <li className="nav-item">
                            <AnchorLink href="#Home" className="nav-link nav-link-color mr-5">HOME</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink href="#about" className="nav-link nav-link-color mr-5">ABOUT ME</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink href="#skills" className="nav-link nav-link-colormr-5">SKILLS</AnchorLink>
                        </li>
                        <li className="nav-item mr-5">
                            <AnchorLink href="#work" className="nav-link nav-link-color mr-5">MY WORK</AnchorLink>
                        </li>
                        <li className="nav-item mr-5">
                            <AnchorLink href="#contact" className="nav-link nav-link-color mr-5">CONTACT</AnchorLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
           

export default SideBar;