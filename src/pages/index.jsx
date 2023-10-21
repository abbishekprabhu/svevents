import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
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
    decoration: file(relativePath: { eq: "decoration.jpg" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    catering: file(relativePath: { eq: "catering.jpg" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photography: file(relativePath: { eq: "photography.jpg" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    } 
    gift: file(relativePath: { eq: "gift.jpg" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    } 
    dj: file(relativePath: { eq: "dj.jpg" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    } 
    tent: file(relativePath: { eq: "tent.jpg" }) {
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
  const image7Fluid = phone.star.childImageSharp.fluid
  const decoration = phone.decoration.childImageSharp.fluid
  const catering = phone.catering.childImageSharp.fluid
  const photography = phone.photography.childImageSharp.fluid
  const gift = phone.gift.childImageSharp.fluid
  const dj = phone.dj.childImageSharp.fluid
  const tent = phone.tent.childImageSharp.fluid
  return (
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
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Img fluid={image2Fluid} className="social-media" /></a>
            <a href="https://www.instagram.com/svevents_/" rel="noreferrer" target="_blank" aria-label="Instagram"><Img fluid={image3Fluid} className="social-media" /></a>
            <a href="https://www.twitter.com" rel="noreferrer" aria-label="Twitter"><Img fluid={image4Fluid} className="social-media" /></a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Whatsapp"><Img fluid={image5Fluid} className="social-media" /></a>
          </div>
        </div>
      </section>
      <section className="second-section" id="our-works">
        <h2>Our works</h2>
        <Swiping />
      </section>
      <section className="third-section" id="services">
        <h3>Services</h3>
        <div className="service-div">
          <div className="meant-div">
            <Img fluid={decoration} alt="dummyimage" className="meant-image" />
            <p className="event-names">Decorations</p>
          </div>
          <div className="meant-div">
            <Img fluid={catering} alt="dummyimage" className="meant-image" />
            <p className="event-names">Catering</p>
          </div>
          <div className="meant-div">
            <Img fluid={photography} alt="dummyimage" className="meant-image" />
            <p className="event-names">Photography</p>
          </div>
          <div className="meant-div">
            <Img fluid={gift} alt="dummyimage" className="meant-image" />
            <p className="event-names">Gifts</p>
          </div>
          <div className="meant-div">
            <Img fluid={dj} alt="dummyimage" className="meant-image" />
            <p className="event-names">DJ/Band</p>
          </div>
          <div className="meant-div">
            <Img fluid={tent} alt="dummyimage" className="meant-image" />
            <p className="event-names">Much More!</p>
          </div>
        </div>
      </section>
      <section className="contact-section" id="contact">
        <Img fluid={image7Fluid} alt="star" className="starttop" />
        <div className="boxed-up">
          <h4>Contact</h4>
          <p>We would love to hear from you! Unleash your dream event. Contact us for excellence.</p>
          <form action="https://formsubmit.co/karthikraj096@gmail.com" method="POST" className="contact-form">
            <input type="text" placeholder="Name" name="name" id="name" required className="forms-input" />
            <input type="tel" placeholder="Mobile Number" name="tel" id="MobileNumber" className="forms-input" required />
            <input type="email" placeholder="Email" name="email" id="Email" className="forms-input" required />
            <select name="How did you hear about us?" id="hear" className="forms-input select-color">
              <option required value="Select Event">How did you hear about us?</option>
              <option className="forms-input" value="Whatsapp">Whatsapp</option>
              <option className="forms-input" value="Instagram">Instagram</option>
              <option className="forms-input" value="Others">Others</option>
            </select>
            <select required name="Event Required" id="event" className="forms-input select-color">
              <option value="Select Event">Select Event</option>
              <option className="forms-input" value="Marriage">Marriage</option>
              <option className="forms-input" value="Birthday">Birthday</option>
              <option className="forms-input" value="Anniversary">Anniversary</option>
              <option className="forms-input" value="Others">Others</option>
            </select>
            <textarea required name="paragraph" id="my-text" cols="30" rows="10" placeholder="Tell us about your event"></textarea>
            <input type="hidden" name="_next" value="https://svevents.netlify.app/thanks" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="submit" value="Submit" className="submit-button" />
          </form>
          <p className="or">or</p>
          <h5>Give us a call or WhatsApp us</h5>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp">
            <Img fluid={image1Fluid} alt="whatsapp" className="phone-image" />
            +91 7019232852
          </a>
        </div>
        <Img fluid={image7Fluid} alt="star" className="startbottom" />
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
