import React from "react";
import styled from "styled-components";
import logo from "../../theme/logo.png";
import theme from "../../theme";

const Wrapper = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.color.primary};
`;

const LogoWrapper = styled.img`
  height: 10rem;
`;

function Header() {
  return (
    <Wrapper>
      <LogoWrapper src={logo} alt="hey car" />
      <h3>Voice your opinion</h3>
      )}
    </Wrapper>
  );
}

export default Header;
