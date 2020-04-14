import React from 'react';
import axios from 'axios';
require("dotenv").config();


class Contact extends React.Component
{

    constructor()
    {
        super();
        //using state to receive inputs
        this.state = { 
            name: '',
            email: '',
            message: ''
        }
        
        this.eventChange = this.eventChange.bind(this);
        this.eventSubmit = this.eventSubmit.bind(this);
    }

    //using evenet to setState the value from input by getting name
    eventChange = (event)=>{
        this.setState({
            [event.target.name] : event.target.value,
            [event.target.email] : event.target.value,
            [event.target.message] : event.target.value
        });
    }

    resetForm = () =>
    {
        this.componentDidMount();
    }

    //Displaying outputs from inputs
    eventSubmit = (event) => {
        
        axios({
            method : "POST",
            url: "http://localhost:3000/send",
            data : {
                from : "DrilonIan@yahoo.com",
                to : this.state.email,
                subject : this.state.email,
                message : this.state.message
            }
        }).then((data) =>{
            this.resetForm();
            alert("Email has been sent" + data.response);
        }).catch((error) => {
            alert("Email error" + error.response);
        });
        

        //alert(this.state.name + " " + this.state.email + " " + this.state.message);

        event.preventDefault();
        //this.setState({value : this.state.value});
    }

    render()
    {

        return(
            <div className="contact" id="contact">
                    <h1 className="about font-weight-bold wow fadeInRight">CONTACT</h1>
                    <div className="name-tag-line wow fadeInRight"></div>
                    <p className="wow fadeInRight">Have a question or want to work <span>together?</span></p>
                    <div className="container wow bounceIn">
                        <form onSubmit={this.eventSubmit} method="POST">
                        <div className="row">
                            <div className="col-xs-12">
                                    <input type="text" 
                                    name="name" 
                                    value={this.state.value} 
                                    onChange={(event) => {this.eventChange(event)}} 
                                    placeholder="Name" 
                                    size="50"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 mt-1">
                                <input type="text" 
                                name="email" 
                                value={this.state.value} 
                                onChange={(event) => {this.eventChange(event)}} 
                                placeholder="Email" 
                                size="50"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 mt-1">
                                <textarea name="message" 
                                cols="30" 
                                value={this.state.value} 
                                onChange={(event) => {this.eventChange(event)}} 
                                rows="7"  
                                placeholder="Your message. . .">
                                </textarea>
                            </div>
                        </div>
                        <button type="type" className="btn-contact">SUMBIT</button>
                    </form>
                    </div>
                    
            </div>
            
        );
    }
    
}


export default Contact;
