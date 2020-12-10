import React from 'react';
import github from '../images/github.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';
import { Link } from 'gatsby';

const Footer = () => {
    return(
        <div className="footer" style={{textAlign: 'center', marginTop: '50px'}}>
            <a href="http://github.com/aaronjoemoreno" target="_blank">
                <img src={github} alt="github" style={{width: '40px', marginLeft: '10px'}}/>
            </a>
            <a href="http://instagram.com/allthejavascript" target="_blank">
                <img src={instagram} alt="instagram" style={{width: '40px', marginLeft: '10px'}}/>
            </a>
            <a href="http://twitter.com/aaronjoemoreno" target="_blank">
                <img src={twitter} alt="twitter" style={{width: '40px', marginLeft: '10px'}}/>
            </a>
            <a href="https://www.linkedin.com/in/aaron-moreno-2971b991/" target="_blank">
                <img src={linkedin} alt="linkedin" style={{width: '40px', marginLeft: '10px'}}/>
            </a>
            <h3 style={{marginTop: '10px'}}>&copy; Aaron Moreno {(new Date().getFullYear())}</h3>
        </div>
    )
}

export default Footer;