import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBlack};
  color: ${(props) => props.theme.colors.primaryWhite};
  height: 1.1rem;
  padding: 1rem;
  border-radius: 0.25rem;
  margin: 3rem;
  cursor: pointer;
`;
function Button(props) {
  const { text, onClick } = props;
  return (
    <ButtonContainer onClick={onClick}>
      {text}
    </ButtonContainer>
  );
}

export default Button;
