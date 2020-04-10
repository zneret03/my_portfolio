//import React, { Component } from 'react'
import React, {useState} from 'react';
import SideBar from './sideBar';

const Nav = () =>
{
    const [opensidebar, setOpenSideBar] = useState(false);

    const openHandler = () =>{
       if(!opensidebar){
           setOpenSideBar(true);
       }
       else{
           setOpenSideBar(false);
       }
   }

   const closeSideBar = () =>{
       setOpenSideBar(false);
   }

       var sidebar;
       if(opensidebar)
       {
           sidebar =  <SideBar close={closeSideBar} sidebar={"closebtn"}/>;
       }


    return (
        <div>
            <div class="toggle">
                <button class="openSideBar" onClick={openHandler}>☰</button>
            </div>
            {sidebar}
            <nav class="mb-1 navbar navbar-expand-lg p-3">
                <div class="collapse navbar-collapse" id="NavbarContent" >
                    <ul class="navbar-nav nav">
                        <li class="nav-item">
                            <a href="#about" class="nav-link nav-link-color animated fadeInDown mr-5">ABOUT ME</a>
                        </li>
                        <li class="nav-item">
                            <a href="#skills" class="nav-link nav-link-color animated fadeInDown mr-5">SKILLS</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a href="#work" class="nav-link nav-link-color animated fadeInDown mr-5">MY WORK</a>
                        </li>
                        <div class="line"></div>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
      

export default Nav;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  