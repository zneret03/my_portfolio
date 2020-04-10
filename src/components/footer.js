import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component
{
    render()
    {
        const instagram = <FontAwesomeIcon icon={faInstagram} size="3x"/>
        const twitter = <FontAwesomeIcon icon={faTwitter}  size="3x" />
        const github = <FontAwesomeIcon icon={faGithub}  size="3x" />
        const facebook = <FontAwesomeIcon icon={faFacebook}  size="3x" />
        const arrowUp = <FontAwesomeIcon icon={faAngleDoubleUp} size="2x"/>
        
        return(
            <div className="footer">   
                <footer className="page-footer font-small footer footer-color">
                    <div className="footer-copyright text-center py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 py-5">
                            <a href="#nav" className="btn-up">{arrowUp}</a>
                                <div className="mb-5 text-center"> 
                                    <a href="https://www.instagram.com/ian.drilon.7/" className="mr-5"><i>{instagram}</i></a>
                                    <a href="https://twitter.com/DrilonIan" className="mr-5"><i>{twitter}</i></a>
                                    <a href="https://github.com/zneret03" className="mr-5"><i>{github}</i></a>
                                    <a href="https://www.facebook.com/ian.drilon.7"><i>{facebook}</i></a>
                                </div>
                                <div className="text-secondary">
                                    <p>IAN ADORABLE DRILON <span>©2020</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;