import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../../theme";

const ButtonWrapper = styled.button`
  border-radius: 0.4rem;
  border: 0.2rem solid ${theme.color.gray1};
  cursor: pointer;
  font-size: ${theme.fontSize.medium};
  margin: 0 1rem;
  padding: 0.2rem;  
  width: 6rem;
  height: 3rem;  
}
`;

function Button({ children, onClick }) {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
