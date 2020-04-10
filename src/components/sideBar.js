import React, {useState} from 'react';
             
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
                    <button className={sidebarclass}  onClick={closeHandler}>×</button>
                    <ul class="navbar-nav nav"> 
                        <li class="nav-item">
                            <a href="#Home" class="nav-link nav-link-color mr-5">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a href="#about" class="nav-link nav-link-color mr-5">ABOUT ME</a>
                        </li>
                        <li class="nav-item">
                            <a href="#skills" class="nav-link nav-link-colormr-5">SKILLS</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a href="#work" class="nav-link nav-link-color mr-5">MY WORK</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a href="#contact" class="nav-link nav-link-color mr-5">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
           

export default SideBar;