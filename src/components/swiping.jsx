import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import {Autoplay, EffectCoverflow, Pagination } from "swiper";

export default function App() {
  const phone = useStaticQuery(graphql`
  query {
    instagram2: file(relativePath: { eq: "instagram-image2.jpeg" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instagram3: file(relativePath: { eq: "instagram-image3.jpeg" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instagram4: file(relativePath: { eq: "instagram-image4.jpeg" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instagram5: file(relativePath: { eq: "instagram-image5.jpeg" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instagram6: file(relativePath: { eq: "instagram-image6.jpeg" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instagram7: file(relativePath: { eq: "instagram-image7.jpeg" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instagram8: file(relativePath: { eq: "instagram-image8.jpeg" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `);
  const instagram2 = phone.instagram2.childImageSharp.fluid
  const instagram3 = phone.instagram3.childImageSharp.fluid
  const instagram4 = phone.instagram4.childImageSharp.fluid
  const instagram5 = phone.instagram5.childImageSharp.fluid
  const instagram6 = phone.instagram6.childImageSharp.fluid
  const instagram7 = phone.instagram7.childImageSharp.fluid
  const instagram8 = phone.instagram8.childImageSharp.fluid
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          dots:false,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Img fluid={instagram2} className="slider-images" />
        </SwiperSlide>
        <SwiperSlide>
          <Img fluid={instagram3} className="slider-images" />
        </SwiperSlide>
        <SwiperSlide>
          <Img fluid={instagram4} className="slider-images" />
        </SwiperSlide>
        <SwiperSlide>
          <Img fluid={instagram5} className="slider-images" />
        </SwiperSlide>
        <SwiperSlide>
          <Img fluid={instagram6} className="slider-images" />
        </SwiperSlide>
        <SwiperSlide>
          <Img fluid={instagram7} className="slider-images" />
        </SwiperSlide>
        <SwiperSlide>
          <Img fluid={instagram8} className="slider-images" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
