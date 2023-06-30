import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Swiping from "../components/swiping"
import video from "../videos/clip.mp4"
export default function IndexPage() {
  
  const phone = useStaticQuery(graphql`
  query {
    phone: file(relativePath: { eq: "phone.png" }) {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
    facebook: file(relativePath: { eq: "facebook.png" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instagram: file(relativePath: { eq: "instagram.png" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    twitter: file(relativePath: { eq: "twitter.png" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    whatsapp: file(relativePath: { eq: "whatsapp.png" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dummyimage: file(relativePath: { eq: "dummyimage.png" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    star: file(relativePath: { eq: "star.png" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  const image1Fluid = phone.phone.childImageSharp.fluid
  const image2Fluid = phone.facebook.childImageSharp.fluid
  const image3Fluid = phone.instagram.childImageSharp.fluid
  const image4Fluid = phone.twitter.childImageSharp.fluid
  const image5Fluid = phone.whatsapp.childImageSharp.fluid
  const image6Fluid = phone.dummyimage.childImageSharp.fluid
  const image7Fluid = phone.star.childImageSharp.fluid
  return(
  <Layout>
    <section className="first-section">
      <div className="shadow"></div>
      <video src={video} muted autoPlay loop className="banner-video"></video>
      <div className="rectangle-div">
        <h1 className="index-h1">Your One Stop Solution for all your events!</h1>
        <div className="what-we-do">
          We do
          <div className="creators-brag">
              <div className="creator-controls">
                <ul className="rolon">
                  <li>Decorations.</li>
                  <li>Catering.</li>
                  <li>Purohith&nbsp;Services.</li>
                  <li>Photography.</li>
                  <li>give&nbsp;Gifts.</li>
                  <li>DJ/Band.</li>
                  <li>bulid&nbsp;Tents.</li>
                  <li>Services&nbsp;for&nbsp;all&nbsp;occasions&nbsp;:)</li>
                </ul>
              </div>
            </div>
        </div>
        <div className="social-div">
          <a href="https://www.instagram.com" aria-label="Facebook"><Img fluid={image2Fluid} className="social-media" /></a>
          <a href="https://www.instagram.com" aria-label="Instagram"><Img fluid={image3Fluid} className="social-media" /></a>
          <a href="https://www.instagram.com" aria-label="Twitter"><Img fluid={image4Fluid} className="social-media" /></a>
          <a href="https://www.instagram.com" aria-label="Whatsapp"><Img fluid={image5Fluid} className="social-media" /></a>
        </div>
      </div>
    </section>
    <section className="second-section">
      <h2>Our works</h2>
      <Swiping />
      <Link to="/works" aria-label="Works" className="view-more">View more!</Link>
    </section>
    <section className="third-section">
      <h3>Services</h3>
      <div className="service-div">
        <div className="meant-div">
          <Img fluid={image6Fluid} alt="dummyimage" className="meant-image"/>
          <p className="event-names">Events</p>
        </div>
        <div className="meant-div">
          <Img fluid={image6Fluid} alt="dummyimage" className="meant-image"/>
          <p className="event-names">Events</p>
        </div>
        <div className="meant-div">
          <Img fluid={image6Fluid} alt="dummyimage" className="meant-image"/>
          <p className="event-names">Events</p>
        </div>
        <div className="meant-div">
          <Img fluid={image6Fluid} alt="dummyimage" className="meant-image"/>
          <p className="event-names">Events</p>
        </div>
        <div className="meant-div">
          <Img fluid={image6Fluid} alt="dummyimage" className="meant-image"/>
          <p className="event-names">Events</p>
        </div>
        <div className="meant-div">
          <Img fluid={image6Fluid} alt="dummyimage" className="meant-image"/>
          <p className="event-names">Events</p>
        </div>
      </div>
    </section>
  <section className="contact-section" id="contact">
    <Img fluid={image7Fluid} alt="star" className="starttop"/>
    <div className="boxed-up">
      <h4>Contact</h4>
      <p>We would love to hear from you! Unleash your dream event. Contact us for excellence.</p>
      <form action="manipulation" method="post" className="contact-form">
        <input type="text" placeholder="Name" name="name" id="name" className="forms-input"/>
        <input type="tel" placeholder="Mobile Number" name="MobileNumber" id="MobileNumber" className="forms-input"/>
        <input type="email" placeholder="Email" name="Email" id="Email" className="forms-input"/>
        <select name="cars" id="cars" className="forms-input select-color">
          <option value="Select Event">How did you hear about us?</option>
          <option className="forms-input" value="volvo">Volvo</option>
          <option className="forms-input" value="saab">Saab</option>
          <option className="forms-input" value="mercedes">Mercedes</option>
          <option className="forms-input" value="audi">Audi</option>
         </select>
        <select name="cars" id="cars" className="forms-input select-color">
          <option value="Select Event">Select Event</option>
          <option className="forms-input" value="volvo">Volvo</option>
          <option className="forms-input" value="saab">Saab</option>
          <option className="forms-input" value="mercedes">Mercedes</option>
          <option className="forms-input" value="audi">Audi</option>
         </select>
        <textarea name="" id="" cols="30" rows="10" placeholder="Tell us about your event"></textarea>
        <input type="submit" value="Submit" className="submit-button" />
      </form>
      <p className="or">or</p>
      <h5>Give us a call or WhatsApp us</h5>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp">
        <Img fluid={image1Fluid} alt="whatsapp" className="phone-image" />
        +91 7019232852
      </a>
    </div>
    <Img fluid={image7Fluid} alt="star" className="startbottom"/>
  </section>
  </Layout>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />
const phoneNumber = '7019232852'; // Replace with your WhatsApp phone number
const message = 'Hello SV Events, I want to book an event!'; // Replace with your predefined message
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;