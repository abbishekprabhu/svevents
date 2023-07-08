import * as React from "react"
import Seo from "../components/seo"
import { Link } from "gatsby"

export default function Thanks() {
   return (
      <div className="thanks">
        <p>Thanks For Submitting the Form! Our Team will contact you ASAP!</p>
        <Link to="https://svevents.netlify.app/">Head Home!</Link>
      </div>
  )
}

export const Head = () => <Seo title="Thanks" />

