import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  border-bottom: 2px ${(props) => props.theme.colors.primaryBlack} solid;
  cursor: pointer;
  height: 1.1rem;
`;
function LinkButton(props) {
  const {
    text, onClick, icon, iconSide,
  } = props;
  return (
    <ButtonContainer onClick={onClick}>
      {text}
    </ButtonContainer>
  );
}

export default LinkButton;
