import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.primaryBlack};
  color: ${(props) => props.theme.colors.primaryWhite};
  width: 100%;
  height: 155px;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 999;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}){
    align-items: center;
    justify-content: flex-start;
    padding-left: 2rem;
    padding-right: 1rem;
  }
`;

const HeaderTitle = styled.h1`
  display: flex;
  margin: 0;
  position: absolute;
  font-size: ${(props) => props.theme.fontSizes.large});
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}){
    transform: translate(-5%, -50%);
    font-size: ${(props) => props.theme.fontSizes.medium});
  }
`;

const HeaderMenuIcon = styled.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>The Coffee Shop</HeaderTitle>
      <HeaderMenuIcon>
        <i className="fa-solid fa-bars fa-xl" />
      </HeaderMenuIcon>
    </HeaderContainer>
  );
}

export default Header;
