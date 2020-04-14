import React from 'react';
import axios from 'axios';

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
    eventSubmit = async (event) => {
        const params = new URLSearchParams();
        params.append('email', this.state.email);
        params.append('name', this.state.name);
        params.append('message', this.state.message);
        
       let config = {
        "Content-Type": "application/x-www-form-urlencoded"
        }

        axios({
            method : "POST",
            headers: config,
            url : "http://localhost:5000/api/sendMail",
            data : params,
        }).then((res) =>{
            console.log("Email sent", res.response);
            console.log("Email sent", res.response);
        }).catch((err) => {
            console.log("Email not sent", err.response);
        });
        
        event.preventDefault();

    }

    render()
    {

        return(
            <div className="contact" id="contact">
                    <h1 className="about font-weight-bold wow fadeInRight">CONTACT</h1>
                    <div className="name-tag-line wow fadeInRight"></div>
                    <p className="wow fadeInRight">Have a question or want to work <span>together?</span></p>
                    <div className="container wow bounceIn">
                        <form onSubmit={this.eventSubmit} action="/api/sendMail" method="POST">
                        <div className="row">
                            <div className="col-xs-12">
                                    <input type="text" 
                                    name="name" 
                                    value={this.state.value} 
                                    onChange={(event) => {this.eventChange(event)}} 
                                    placeholder="Name" 
                                    required
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
                                required
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
                                required
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
