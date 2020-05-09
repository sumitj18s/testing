import React from "react";
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

export default Layout;
