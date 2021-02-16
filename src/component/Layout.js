import React from "react";
import Navigation from "./Navigation";

const styles = {
  maxWidth: 1200,
  marginLeft: "auto",
  marginRigt: "auto",
};

const Layout = ({ children }) => (
  <div style={styles}>
    <Navigation />

    <hr></hr>
    {children}
  </div>
);

export default Layout;
