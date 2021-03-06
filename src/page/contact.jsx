import React from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
class Contact extends React.Component
{
    constructor()
    {
        super();
        //using state to receive inputs
        this.state = { 
            name: '',
            email: '',
            message: '',
            spinner : false

        }
        
        this.eventChange = this.eventChange.bind(this);
        this.eventSubmit = this.eventSubmit.bind(this);
    }

    //using evenet to setState the value from input by getting name
    eventChange = (event)=>{
        this.setState({
            [event.target.name] : event.target.value,
            [event.target.email] : event.target.value
            //[event.target.message] : event.target.value
        });
    }
    
    //Prompt dialog box to confirm that email is already been
     contactDialogConfirm = () =>{
        setTimeout(() =>{
            swal.fire({
                position: 'center',
                icon : 'success',
                title : 'Please check your email',
                showConfirmButton : true,
                timer: 2000
            }).then((success) =>{
                if(success)
                {
                    this.setState({
                        name : '',
                        email : '',
                        message : ''
                    });
                }
            });
            
            this.setState({
                spinner: false
            });  
        }, 1000);
    }

    //loadSpinner
    loadSpinner = () =>
    {
        this.setState({
            spinner : true
        });
    }

    //Displaying outputs from inputs
    eventSubmit = async (event) => {
        event.preventDefault();
        
        const params = new URLSearchParams();
        params.append('name', this.state.name);
        params.append('email', this.state.email);
        params.append('message', this.state.message);

        
        //to make Cross origin request 
       let config = {
        "Content-Type": "application/x-www-form-urlencoded"
        }
        
        this.loadSpinner()
        
        axios({
            method : "POST",
            headers: config,
            url : "https://us-central1-my-portfolio-9cf20.cloudfunctions.net/app/api/sendMail",
            data : params,
        }).then(() =>{
            this.contactDialogConfirm();
        }).catch(() => {
            this.contactDialogConfirm();             
        });
    }

    render()
    {
        return(
            <div className="contact" id="contact">
                    <h1 className="about font-weight-bold wow fadeInRight">CONTACT</h1>
                    <div className="name-tag-line wow fadeInRight"></div>
                    <p className="wow fadeInRight">Have a question or want to work <span>together?</span></p>
                    <div className="container wow bounceIn">
                        <form onSubmit={this.eventSubmit} className="form-contact" action="/api/sendMail" method="POST">
                        <div className="row">
                            <div className="col-xs-12">
                                    <input type="text" 
                                    name="name" 
                                    className="form-control"
                                    value={this.state.name} 
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
                                className="form-control"
                                value={this.state.email} 
                                onChange={(event) => {this.eventChange(event)}} 
                                placeholder="Email" 
                                required
                                size="50"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <div className="col-xs-12 mt-1">
                                    <textarea name="message" 
                                    cols="51" 
                                    className="form-control"
                                    value={this.state.message} 
                                    onChange={(event) => {this.eventChange(event)}} 
                                    rows="7"  
                                    required
                                    placeholder="Your message. . ."> 
                                    </textarea>
                                    <button type="submit" name="btnSubmit" className="btn-contact" disabled={this.state.spinner}>
                                    {this.state.spinner &&  <i className="spinner-border spinner-border-sm text-danger"></i>}
                                    {this.state.spinner &&  <span className="text-secondary"></span>}
                                    {!this.state.spinner &&  <span className="text-secondary">SUBMIT</span>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                    
            </div>
            
        );
    }
    
}


export default Contact;
