import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SideBar from '../components/sideBar';
import HomeDesign from '../components/HomeDesign';
import ReactTypingEffect from 'react-typing-effect';
class Home extends React.Component
{
    constructor()
    {
        super();
        this.state ={
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
      <div className="Home">
          <div className="container" id="landingPage">
          <div className="toggle">
                <button className="openSideBar" onClick={() => {this.openHandler()}}>☰</button>
            </div>
            {sidebar}
            <div className="row">
              <div className="col-lg-6">
                <div className="mt-5 main-info-section  animated fadeInDown" id="Home">
                  <h1>
                    <HomeDesign className={'font-weight-bold hvr-grow'} letter={'Hi'}/>
                  </h1>
                  <h1>
                  <HomeDesign className={'font-weight-bold hvr-grow'} letter={"I'm"}/>
                  <HomeDesign className={'font-weight-bold text-danger hvr-grow ml-2'} letter={'Ian'}/>
                  </h1>
                  <h1>
                    <span><ReactTypingEffect className="font-weight-bold hvr-grow" speed={100} eraseDelay={5000}
                    typingDelay={200} text="Fullstack Developer"/></span>
                  </h1>
                  <p className="par-color animated fadeInDown">Css / Javascript / React / Nodejs</p>
                </div>
                </div> 
                <div className="col-lg-6">
                <div className="right">
                  <img className="animated fadeIn" src={require('../components/image/code1.svg')} alt={this.props.Image}/>
                </div>
                </div>
              </div> 
              <AnchorLink href="#about" className="btn-contact animated fadeInLeft">View my work</AnchorLink>
           </div>
           </div>
  );
  }
  
}


export default Home;