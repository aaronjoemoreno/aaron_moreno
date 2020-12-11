import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import '../assets/styles/bio.css';


const Bio = () => {
    const data = useStaticQuery(graphql`
        query{file(relativePath: {eq: "profile.jpeg"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

console.log(data);

    return(
        <>
            <h1 className="bio-header">About Me...</h1>
            <div className="bio">
                <div className="image-container">
                    <Img fluid={data.file.childImageSharp.fluid}/>
                </div>
                <p className="bio-details">Well, now that you know what I do...let me tell you a little bit more about who I am. I'm Aaron! I am a full stack developer from Albuquerque, NM. I have a beautiful wife named Brittany and full of energy son named Micah. I love to teach others. I used to be a trainer for Apple. I share simple code tutorials here: <a href="https://www.instagram.com/allthejavascript" target="blank" style={{fontSize: "2rem", textDecoration: "none", color: "black"}}>All The JS.</a> I enjoy running, cooking, watching good movies, especially ones from the 80s and producing music.</p>
            </div>
        </>
    )
}

export default Bio;