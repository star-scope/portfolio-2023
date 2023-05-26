import * as React from "react"
import { Link } from "gatsby"

//Styles
import "../components/404.css";
import "../components/layout.css";

//Components
import Seo from "../components/seo"

const NotFoundPage = () => (
  <>
    <Seo title="404" />
    <div className="notFoundContainer">
      <img id="logo" src="/images/Logo.png" alt="Logo" />
      <h1>404: NOT FOUND</h1>
      <p className="notFoundCopy">
        You probably did this on purpose. Typing starscope.design is not that complicated. I'm gonna assume you know how to get back, but if not,{" "}<i>*hint* try the back button in your browser</i> 😉
      </p>
      <p className="notFoundCopy">
        Still struggling? There's a button that might work. I'm sure I left it around here somewhere, just keep moving your mouse around. I'm sure you'll find it.
      </p>
      <Link to="/"><button className="backButton">YOU FOUND ME!</button></Link>
    </div>
  </>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;