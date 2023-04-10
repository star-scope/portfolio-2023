import * as React from "react"
import Seo from "../components/seo"
import "../components/layout.css"
import { Link } from "gatsby";

const NotFoundPage = () => {
  const buttonStyle = {
    position: "absolute",
    opacity: "0",
    border: "none",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    borderRadius: "8px",
    margin: "50px auto",
    cursor: "pointer",
    transition: "opacity 0.3s",
    width: "300px",
    color: "#cccccc",
    background: "linear-gradient(180deg, #222222 0%, #181818 100%)",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.35)",
    fontWeight: 700,
    fontSize: "12px",
    letterSpacing: "0.35em",
    marginTop: "100px",
    marginLeft: "300px",
  };

  const buttonHoverStyle = {
    opacity: 1,
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div id="notFoundContainer">
      <img id="logo" src="images/logo.png"></img>
      <h1>404: NOT FOUND</h1>
      <p id="notFoundCopy">
        You probably did this on purpose. Typing starscope.design is not that complicated. I'm gonna assume you know how to get back, but if not,{" "}<i>*hint* try the back button in your browser</i> 😉
      </p>
      <p id="notFoundCopy">
        Still struggling? There's a button that might work. I'm sure I left it around here somewhere, just keep moving your mouse around. I'm sure you'll find it.
      </p>
      <Link to="/"><button
        style={isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        YOU FOUND ME!
      </button></Link>
    </div>
  );
};

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;