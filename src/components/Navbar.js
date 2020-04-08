//import React, { Component } from 'react'
import React, {useState} from 'react';
import SideBar from './sideBar';


 class Nav extends React.Component
 {
     state = () =>
     {
        const [opensidebar, setOpenSideBar] = useState(false);
     }

     openHandler = () =>{
        if(!this.state.opensidebar){
            this.state.setOpenSideBar(true);
        }
        else{
            this.state.setOpenSideBar(false);
        }
    }

    closeSideBar = () =>{
        this.state.setOpenSideBar(false);
    }

    open()
    {
        var sidebar;
        if(this.state.opensidebar)
        {
            sidebar =  <SideBar close={this.closeSideBar} sidebar={"closebtn"}/>;
        }

        return sidebar;
    }
  
    render()
    {
        return (
            <div>
                {this.open}
                <div class="toggle">
                    <button class="openSideBar" onClick={this.openHandler}>☰</button>
                </div>

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
 }
export default Nav;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  