import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="about-us">
        <h1 className="about-us-h1">About Us.</h1>
        <p>Welcome to page 2</p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="About Us" />

export default SecondPage
