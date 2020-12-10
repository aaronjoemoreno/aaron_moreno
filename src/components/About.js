import React from 'react';
import '../assets/styles/about.css'
import build from '../images/build.svg'
import adjust from '../images/adjust.svg'
import deliver from '../images/deliver.svg'

const About = () => {
    return(
        <div className='about'>
            <h1>About What I Do...</h1>
            <div className="about-container">
                <div className="img-container">
                    <div className="img">
                        <img src={build} alt="build"/>
                    </div>
                    <h3>Build and Plan</h3>
                </div>
                <div className="img-container">
                    <div className="img">
                        <img src={adjust} alt="adjust"/>
                    </div>
                    <h3>Custom Builds</h3>
                </div>
                <div className="img-container">
                    <div className="img">
                        <img src={deliver} alt="deliver"/>
                    </div>
                    <h3>Deliver and Deploy</h3>
                </div>
            </div>
            <p className="summary">Building a brand takes first impressions, but also continued impressions. A fast, simple and thoughful website can keep clients coming back to make more purchases and keep wanting to interact with your brand.</p>
        </div>
    )
}
export default About;