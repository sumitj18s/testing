import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Content from "../Content/index";

function Layout(props) {
  return (
    <>
      <Header />
      <Content>{props.children}</Content>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
