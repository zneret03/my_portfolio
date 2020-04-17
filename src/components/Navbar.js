import React from 'react';
import SideBar from './sideBar';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
                open : true
            });
        }
        else{
            //setOpenSideBar(false);
            this.setState({
                open : false
            });
        }
    }

     closeSideBar = () =>{
         this.setState({
            open:  false
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
                <div className="toggle">
                    <button className="openSideBar" onClick={() => {this.openHandler()}}>☰</button>
                </div>
                {sidebar}
                <nav className="mb-1 navbar navbar-expand-lg p-3" id="nav">
                    <div className="collapse navbar-collapse" id="NavbarContent" >
                        <ul className="navbar-nav nav">
                                <li className="nav-item">
                                    <AnchorLink href="#about" 
                                    className="nav-link nav-link-color
                                     animated fadeInDown mr-5"
                                     >ABOUT ME</AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink href="#skills" className="nav-link nav-link-color animated fadeInDown mr-5">SKILLS</AnchorLink>
                                </li>
                                <li className="nav-item mr-5">
                                    <AnchorLink href="#work" className="nav-link nav-link-color animated fadeInDown mr-5">MY WORK</AnchorLink>
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      