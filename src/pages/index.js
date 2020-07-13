import React from "react"

import '../../static/assets/css/video.css';
import background from "../../static/assets/vid/MichaelPR.mp4";
import logo from "../../static/assets/img/greatstate.png";

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="fullscreen-bg">
        <video loop muted autoPlay className="fullscreen-bg__video">
            <source src={background} type="video/mp4" />
            <source src={background} type="video/ogg" />
            Your browser does not support the video tag.
        </video>
    </div>
    <div>
        <img className="logo" alt="Great State" src={logo} />
    </div>
  </Layout>
)

export default IndexPage
