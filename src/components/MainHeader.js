import React, { useEffect } from 'react'
import image from '../images/image.png'
import squiggle from '../images/squiggle.png'
import sunshine from '../images/sunshine.svg'
import wave from '../images/wave.svg';
import '../assets/styles/mainheader.css'
import { graphql, useStaticQuery } from "gatsby"

const MainHeader = ({updateTheme, theme}) => {
    //Change Icons if theme changed
    useEffect(() => {
        console.log('theme changed')
    }, [theme])


    const data = useStaticQuery(graphql`
    query data{
        site{
          siteMetadata{
            title
            description
            bio
          }
        },
    }`)

  console.log(data)

  const { site: { siteMetadata }} = data;

    return (
        <div className='waveHeader'>
                <div className='main-title'>
                    <h1>{siteMetadata.title}</h1>
                    <h2>{siteMetadata.description}</h2>
                </div>
                <img className='main-image' src={image} alt="Aaron"/>
                <img className='decor-squiggle' src={sunshine} alt="art" onClick={updateTheme}/>
                <img className='decor-squiggle-2' src={squiggle} alt="art"/>
                <img className='decor-squiggle-3' src={squiggle} alt="art"/>
                <a href="#contact" className='main-button'>
                        Let's Connect!
                </a>
            <img className='wave' src={wave} alt="wave"/>
        </div>
    )
}
export default MainHeader;