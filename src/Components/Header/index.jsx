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

const LogoWrapper = styled.div`
  display: flex;
  width: 40%;
`;
const Logo = styled.img`
  height: 10rem;
`;

const Title = styled.h2`
  margin-right: auto;
`;

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={logo} alt="hey car" />
      </LogoWrapper>
      <Title>Vote your opinion</Title>
    </Wrapper>
  );
}

export default Header;
