import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
`;

function Layout(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

export default Layout;
