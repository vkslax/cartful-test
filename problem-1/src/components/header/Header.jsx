import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.primaryBlack};
  color: ${(props) => props.theme.colors.primaryWhite};
  width: 100%;
  height: 100px;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  @media screen and (max-width: 768px) {
    left: 5%;
    -ms-transform: translate(-5%, -50%);
    transform: translate(-5%, -50%);
  }
`;

const HeaderMenuIcon = styled.i`
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 2rem;
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
