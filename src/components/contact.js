import React from 'react';


class Contact extends React.Component
{
    render()
    {
        return(
            
            <div className="contact" id="contact">
                    <h1 class="about font-weight-bold wow fadeInRight">CONTACT</h1>
                    <div class="name-tag-line wow fadeInRight"></div>
                    <p className="wow fadeInRight">Have a question or want to work <span>together?</span></p>
                    <div className="container wow bounceIn">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="float-center">
                                    <input type="text" value="" placeholder="Name" size="50"/>
                                </div>
                            </div>
                            <div className="col-md-12 mt-1">
                                <div className="float-center">
                                    <input type="Email" value="" placeholder="Email" size="50"/>
                                </div>
                            </div>
                            <div className="col-md-12 mt-1">
                                <div className="float-center">
                                    <textarea name="" id="" cols="30" rows="7"  placeholder="Your message. . ."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn-contact">SUMBIT</button>
            </div>
            
        );
    }
    
}

export default Contact;
