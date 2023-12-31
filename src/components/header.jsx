import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Header() {
  const logo = useStaticQuery(graphql`
  query logo {
    file(relativePath: {eq: "sv.png"}) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return (
    <>
      <header>
        <Link to="/" aria-label="Home">
          <Img fluid={logo.file.childImageSharp.fluid} alt="logo" className="logo-image" />
        </Link>
        <input type="checkbox" name="" id="" className="check" />
        <div className="ham-menu">
          <span className="dashes bar-1"></span>
          <span className="dashes bar-2"></span>
          <span className="dashes bar-3"></span>
        </div>
        <nav>
          <div className="nav-links">
            <Link to="/" aria-label="Home">Home</Link>
            <Link to="https://svevents.netlify.app/about-us" aria-label="About">About Us</Link>
            <Link to="https://svevents.netlify.app/#our-works" aria-label="Works">Our Works</Link>
            <Link to="https://svevents.netlify.app/#services" aria-label="Services">Services</Link>
            <Link to="https://svevents.netlify.app/#contact" aria-label="Contact">Contact</Link>
          </div>
        </nav>
      </header>
    </>
  )
}
