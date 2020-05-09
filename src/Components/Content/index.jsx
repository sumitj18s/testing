import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 5rem auto;
  flex-direction: column;
`;

function Content(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

export default Content;
