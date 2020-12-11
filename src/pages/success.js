import React from "react";
import { Link } from "gatsby"
import Layout from "../components/layout";
import ThankYou from '../components/ThankYou';
import Footer from '../components/Footer';
import SEO from "../components/seo";

const Success = () => {
  return(
    <div className="dark">
      <Layout>
        <SEO title="Home" />
        <ThankYou />
      </Layout>
    </div>
  )
}

export default Success;