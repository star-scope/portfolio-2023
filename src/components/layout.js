import * as React from "react";
import PropTypes from "prop-types";

import "./layout.css";
import Footer from "./nav/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// Define the propTypes for the Layout component
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
