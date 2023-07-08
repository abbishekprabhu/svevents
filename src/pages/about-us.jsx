import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function AboutUs() {
  const phone = useStaticQuery(graphql`
  query {
    about: file(relativePath: { eq: "about-us.jpg" }) {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }`)
  const about = phone.about.childImageSharp.fluid
  return (
    <Layout>
      <div className="about-us boxed-up">
        <h1 className="about-us-h1">About Us.</h1>
        <Img fluid={about} alt="about-image" className="about-us-image" />
        <p className="about-paragraph welcome">Welcome to SV Events, your one-stop destination for all your event needs. We are an exceptional event company offering a wide range of services including Decorations, Catering, Purohith services, Photography, Gifts, DJ/Band, Tents, and more, catering to every occasion you can imagine.</p>
        <p className="about-paragraph">At SV Events, we pride ourselves on our unwavering commitment to delivering top-notch services that go above and beyond our clients' expectations. With a wealth of experience in the industry, we have successfully organized numerous events that have left our customers happy, satisfied, and coming back for more.</p>
        <p className="about-paragraph">What sets us apart is our dedication to treating every event as if it were our own. We understand the significance of your special day and go the extra mile to ensure that every detail is meticulously planned and flawlessly executed. Whether it's a grand wedding celebration, a corporate gala, a religious ceremony, or an intimate gathering, we strive to make it a memorable and extraordinary experience for you and your guests.</p>
        <p className="about-paragraph">Our team of seasoned professionals brings creativity, passion, and expertise to the table, working closely with you to bring your vision to life. From conceptualizing unique themes and stunning decorations to crafting delectable menus that tantalize the taste buds, capturing precious moments through our exceptional photography, providing top-quality entertainment, and offering reliable tent and other event services, we take care of every aspect with utmost dedication.</p>
        <p className="about-paragraph">Your satisfaction is our ultimate goal, and we prioritize your needs and preferences throughout the planning process. We listen attentively to your requirements, offer personalized solutions, and ensure that all your expectations are met and exceeded. With SV Events, you can trust that your event will be flawlessly executed, leaving you stress-free to enjoy the festivities and create cherished memories.</p>
        <p className="about-paragraph">If you have an event on the horizon, we invite you to experience the SV Events difference. Please don't hesitate to contact us, and let us make your vision a reality. Together, we will create an unforgettable event that will be talked about for years to come.</p>
        <Link to="https://svevents.netlify.app/#contact" className="contact-us">Contact Us</Link>
      </div>
      <hr className="line" />
    </Layout>
  )
}

export const Head = () => <Seo title="About Us" />

