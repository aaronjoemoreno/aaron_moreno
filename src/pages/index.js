import React, { useState } from "react";
// import { Link } from "gatsby"
import Layout from "../components/layout";
import MainHeader from '../components/MainHeader';
import About from '../components/About';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from "../components/seo";
// import ComingSoon from '../components/ComingSoon';

const IndexPage = () => {
  const [theme, setTheme] = useState('dark')

  const updateTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return(
    <div className={theme}>
      <Layout>
        <SEO title="Home" />
        <MainHeader updateTheme={updateTheme} theme={theme}/>
        <About/>
        <Bio />
        <Contact />
        <Footer />
        {/* <ComingSoon /> */}
      </Layout>
    </div>
  )
}

export default IndexPage
