import React from "react"
import Layout from "../components/layout"
import ThankYou from '../components/ThankYou'
import SEO from "../components/seo"

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