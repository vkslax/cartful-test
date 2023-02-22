import React from 'react';
import styled from 'styled-components';
import LinkButton from '../link-button/LinkButton';

const FooterContainer = styled.div`
  padding: 2rem 4rem 2rem 4rem;
  height: 5rem;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primaryBeige};
`;

/*
  Buttons doesn't have any action. Ideally should be integrated with stepper and navigation.
 */
function Footer() {
  return (
    <FooterContainer>
      <LinkButton text="Back" />
      <LinkButton text="Why it matters?" />
    </FooterContainer>
  );
}
export default Footer;
