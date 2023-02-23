import React from 'react';
import styled from 'styled-components';

const BrewOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 164px;
  width: 150px;
  background-color: ${(props) => ((!props.attenuate) ? props.color : props.theme.colors.primaryDarkBeige)};
  margin: .75rem;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}){
    margin: 0.5rem;
    width: 155px;
    height: 130px;
  }
`;

const ImgContainer = styled.div`
  width: 50%;
`;

const IconText = styled.span`
  display: inline-block;
`;
function BrewOption(props) {
  const {
    color, icon, text, attenuate,
  } = props;
  return (
    <BrewOptionContainer color={color} attenuate={attenuate}>
      <ImgContainer>
        <img src={icon} alt={text} />
      </ImgContainer>
      <IconText>{text}</IconText>
    </BrewOptionContainer>
  );
}

export default BrewOption;
