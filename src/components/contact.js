import React from 'react';


class Contact extends React.Component
{
    
    //passing props from other components
    constructor()
    {
        super();
        this.state = { 
            name: '',
            email: '',
            message: ''
        }
        
        this.eventChange = this.eventChange.bind(this);
        this.eventSubmit = this.eventSubmit.bind(this);
    }

    eventChange(event)
    {
        this.setState({
            [event.target.name] : event.target.value,
            [event.target.email] : event.target.value,
            [event.target.message] : event.target.value
    });
    }

    eventSubmit(event)
    {
        alert(this.state.name + " " + this.state.email + " " + this.state.message);
        event.preventDefault();
        //this.setState({value : this.state.value});
    }
    

    render()
    {
        return(
            
            <div className="contact" id="contact">
                    <h1 class="about font-weight-bold wow fadeInRight">CONTACT</h1>
                    <div class="name-tag-line wow fadeInRight"></div>
                    <p className="wow fadeInRight">Have a question or want to work <span>together?</span></p>
                    <div className="container wow bounceIn">
                        <form onSubmit={this.eventSubmit}>
                        <div className="row">
                            <div className="col-xs-12">
                                    <input type="text" name="name" value={this.state.value} onChange={this.eventChange} placeholder="Name" size="50"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 mt-1">
                                <input type="text" name="email" value={this.state.value} onChange={this.eventChange} placeholder="Email" size="50"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 mt-1">
                                <textarea name="message" cols="30" value={this.state.value} onChange={this.eventChange} rows="7"  placeholder="Your message. . ."></textarea>
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
