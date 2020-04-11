//import React, { Component } from 'react'
import React from 'react';
import SideBar from './sideBar';

class Nav extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            open : false
        }
    }

     openHandler = () =>{
        if(!this.state.open){
            //setOpenSideBar(true);
            this.setState({
                open : this.setState.open = true
            });
        }
        else{
            //setOpenSideBar(false);
            this.setState({
                open : this.setState.open = false
            });
        }
    }

     closeSideBar = () =>{
         this.setState({
            open: this.setState.open = false
         });
    }

    render()
    {

        let sidebar;
        if(this.state.open)
        {
           sidebar = <SideBar close={() => {this.closeSideBar()}} sidebar={"closebtn"}/>
        }

        return (
            <div>
                <div class="toggle">
                    <button className="openSideBar" onClick={() => {this.openHandler()}}>☰</button>
                </div>
                {sidebar}
                <nav className="mb-1 navbar navbar-expand-lg p-3" id="nav">
                    <div className="collapse navbar-collapse" id="NavbarContent" >
                        <ul className="navbar-nav nav">
                            <li className="nav-item">
                                <a href="#about" className="nav-link nav-link-color animated fadeInDown mr-5">ABOUT ME</a>
                            </li>
                            <li class="nav-item">
                                <a href="#skills" className="nav-link nav-link-color animated fadeInDown mr-5">SKILLS</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a href="#work" className="nav-link nav-link-color animated fadeInDown mr-5">MY WORK</a>
                            </li>
                            <div className="line"></div>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
    
}
      
export default Nav; 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      