import React from 'react'
import { Link } from 'gatsby'
import image from '../images/image.png'
import squiggle from '../images/squiggle.png'
import sunshine from '../images/sunshine.svg'
import wave from '../images/wave.svg'
import Footer from '../components/Footer'
import '../assets/styles/mainheader.css'


const ThankYou = () => {
    return (
      <>
        <div className='waveHeader'>
          <div className='main-title'>
              <h1>Thanks For Reaching Out!</h1>
              <h2>I'll respond as soon as possible...</h2>
          </div>
          <img className='main-image' src={image} alt="Aaron"/>
          <img className='decor-squiggle' src={sunshine} alt="art"/>
          <img className='decor-squiggle-2' src={squiggle} alt="art"/>
          <img className='decor-squiggle-3' src={squiggle} alt="art"/>

          <Link to="/" exact className='main-button'>
            Home
          </Link>

          <img className='wave' src={wave} alt="wave"/>
        </div>
        <Footer />
      </>
    )
}
export default ThankYou