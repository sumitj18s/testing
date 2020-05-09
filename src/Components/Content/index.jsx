import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem auto;
  flex-direction: column;
`;

function Content(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
