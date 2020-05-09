import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SideBar from './sideBar';

class Home extends React.Component
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

  render(){
    
    let sidebar;
    if(this.state.open)
    {
       sidebar = <SideBar close={() => {this.closeSideBar()}} sidebar={"closebtn"}/>
    }

    return(
      <div>
          <div className="container" id="landingPage">
          <div className="toggle">
                <button className="openSideBar" onClick={() => {this.openHandler()}}>☰</button>
            </div>
            {sidebar}
            <div className="row">
              <div className="col-lg-6">
                  <div className="mt-5 main-info-section  animated fadeInDown" id="Home">
                  <h1>
                    <span className="font-weight-bold hvr-grow">H</span>
                    <span className="font-weight-bold hvr-grow">i</span>
                  </h1>
                  <h1>
                    <span className="font-weight-bold hvr-grow ">I</span>
                    <span className="font-weight-bold hvr-grow ">'</span>
                    <span className="font-weight-bold hvr-grow mr-2">m</span>
                    <span className="font-weight-bold text-danger hvr-grow"> I</span>
                    <span className="font-weight-bold text-danger hvr-grow"> a</span>
                    <span className="font-weight-bold text-danger hvr-grow"> n,</span>
                  </h1>
                  <h1>
                    <span className="font-weight-bold hvr-grow">F</span>
                    <span className="font-weight-bold hvr-grow">u</span>
                    <span className="font-weight-bold hvr-grow">l</span>
                    <span className="font-weight-bold hvr-grow">l</span>
                    <span className="font-weight-bold hvr-grow">s</span>
                    <span className="font-weight-bold hvr-grow">t</span>
                    <span className="font-weight-bold hvr-grow">a</span>
                    <span className="font-weight-bold hvr-grow">c</span>
                    <span className="font-weight-bold hvr-grow mr-2">k</span>
                    <span className="font-weight-bold hvr-grow"> D</span>
                    <span className="font-weight-bold hvr-grow"> e</span>
                    <span className="font-weight-bold hvr-grow"> v</span>
                    <span className="font-weight-bold hvr-grow"> e</span>
                    <span className="font-weight-bold hvr-grow"> l</span>
                    <span className="font-weight-bold hvr-grow"> o</span>
                    <span className="font-weight-bold hvr-grow"> p</span>
                    <span className="font-weight-bold hvr-grow"> e</span>
                    <span className="font-weight-bold hvr-grow">r.</span>
                  </h1>
                  <p className="par-color animated fadeInDown">Css / Javascript / React / Nodejs</p>
                </div>
                </div> 
                <div className="col-lg-6">
                <div className="right">
                 <img className="animated fadeIn" src={require('./image/mountain.jpg')} alt={this.props.Image}/>
                </div>
                </div>
              </div> 
              <AnchorLink href="#contact" className="btn-contact animated fadeInLeft">Contact me</AnchorLink>
           </div>
           </div>
  );
  }
  
}


export default Home;