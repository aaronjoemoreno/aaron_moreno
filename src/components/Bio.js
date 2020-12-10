import React from 'react';
import profile from '../assets/profile.jpeg'
import '../assets/styles/bio.css';


const Bio = () => {
    return(
        <>
            <h1 className="bio-header">About Me...</h1>
            <div className="bio">
                <div className="image-container">
                    <img src={profile} alt="Aaron and Family"/>
                </div>
                <p className="bio-details">Well, now that you know what I do...let me tell you a little bit more about who I am. I'm Aaron! I am a full stack developer from Albuquerque, NM. I have a beautiful wife named Brittany and full of energy son named Micah. I love to teach others. I used to be a trainer for Apple. I share ways code tutorials here: <a href="https://www.instagram.com/allthejavascript" target="blank">All The JS.</a> I enjoy running, cooking, watching good movies, especially ones from the 80s and producing music. I also do a little blogging, which you can find below.</p>
            </div>
        </>
    )
}

export default Bio;