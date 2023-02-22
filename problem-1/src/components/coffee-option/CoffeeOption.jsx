import React from 'react';
import styled from 'styled-components';

const CoffeeOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const TitleText = styled.h2`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.primaryGreen};
  margin-bottom: 0.5rem;
`;
const ImgContainer = styled.div`
  width: 80%;
`;
const CoffeeNameText = styled.h3`
  font-weight: 400;
  margin-bottom: 0;
`;
const DescriptionText = styled.p`
  // TODO: Add styles for no needed description at this moment
`;
const PriceText = styled.p`
  font-weight: 700;
`;

/*
  A component was created in order to reuse it in the following sections of the results page,
  although they were not implemented at this moment. That's why description details is a to-do.
 */
function CoffeeOption(props) {
  const {
    title, picture, coffeName: coffeeName, description, price,
  } = props;
  return (
    <CoffeeOptionContainer>
      {title && (<TitleText>{title}</TitleText>)}
      <ImgContainer>
        <img src={picture} alt={coffeeName} width="100%" />
      </ImgContainer>
      <CoffeeNameText>{coffeeName}</CoffeeNameText>
      { description && (<DescriptionText>{description}</DescriptionText>)}
      <PriceText>{price}</PriceText>
    </CoffeeOptionContainer>
  );
}

export default CoffeeOption;
