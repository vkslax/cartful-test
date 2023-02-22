import React from 'react';
import styled from 'styled-components';

const CoffeeCharacteristicContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  // align-items: center;
`;
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}){
    flex-direction: row;
  }
  `;
const TitleText = styled.p`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  opacity: 0.7;
  margin-left: 1rem;
  letter-spacing: 0.16em;
`;
const IconContainer = styled.div`
`;
const DescriptionText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  padding-top: 1rem;
  text-align: center;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}){
    padding-left: 1.5rem;
    padding-top: 0;
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;
function CoffeeCharacteristic(props) {
  const { title, icon, description } = props;
  return (
    <CoffeeCharacteristicContainer>
      <TitleText>{title}</TitleText>
      <ItemsContainer>
        <IconContainer>
          <img src={icon} alt={title} />
        </IconContainer>
        <DescriptionText>{description}</DescriptionText>
      </ItemsContainer>
    </CoffeeCharacteristicContainer>
  );
}

export default CoffeeCharacteristic;
