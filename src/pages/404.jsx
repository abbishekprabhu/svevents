import * as React from "react"
import "../Global.css"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
    <div className="four-oh-four">
      <h1 className="four-oh-found">404: Not Found</h1>
      <p>You Just entered the wrong page which doesn't exist.</p>
      <Link to="/" className="backhome">Head Home!</Link>
    </div>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
