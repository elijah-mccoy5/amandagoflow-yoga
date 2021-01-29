import React from 'react';
import './index.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://www.instagram.com/amandagoflow/">
            <InstagramIcon id="insta"/>
            </a>
            <FacebookIcon  id="fb"/>
            <h1 className="sub">Subscribe</h1>
            <h3 className="sign-up">sign up with your email address to recieve new and updates</h3>
            <div className="sign-ups">
            <input placeholder="Email address..." className="footer-input"/>
        <button className="sign-up-btn">Sign Up</button>
            </div>
            <h5 className="sub-privacy">We respect your privacy</h5>
    
      <h5 className="footer-copyright"><CopyrightIcon id="copyright"/> Amandagoflow 2020</h5>
      <h5 className="footer-copyright">Powered by ECM Productions</h5>
        </div>
    );
};

export default Footer;