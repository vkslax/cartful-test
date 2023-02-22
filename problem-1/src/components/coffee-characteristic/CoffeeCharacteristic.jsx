import React from 'react';
import styled from 'styled-components';

const CoffeeCharacteristicContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  align-items: center;
`;

const TitleText = styled.p`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  opacity: 0.7;
  margin: 1rem 1rem 2rem 0;
`;
const IconContainer = styled.div`
`;
const DescriptionText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  text-align: center;
`;
function CoffeeCharacteristic(props) {
  const { title, icon, description } = props;
  return (
    <CoffeeCharacteristicContainer>
      <TitleText>{title}</TitleText>
      <IconContainer>
        <img src={icon} alt={title} />
      </IconContainer>
      <DescriptionText>{description}</DescriptionText>
    </CoffeeCharacteristicContainer>
  );
}

export default CoffeeCharacteristic;
