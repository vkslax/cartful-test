import React from 'react';
import styled from 'styled-components';
import { CURRENT, REMAINING } from '../../constants/constants';

const NavigationBarContainer = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 1px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  `;

const NavigationItem = styled.div`
  margin: 0.5rem 1rem;
  display: flex;
  border: ${(props) => (props.state !== CURRENT ? '1px solid rgb(14, 1, 1)' : 0)};
  box-sizing: border-box;
  border-radius: 50%;
  width: 1.3rem;
  height: 1.3rem;
  background-color: ${(props) => (props.state === REMAINING ? props.theme.colors.primaryWhite
    : props.state === CURRENT ? props.theme.colors.secondarySeabrightYellow
      : props.theme.colors.primaryBlack)};
`;

const NavigationItemText = styled.div`
  text-align: center;
  line-height: 150%;
  width: 100%;
  height: 100%;
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  color: ${(props) => (props.state !== REMAINING ? props.theme.colors.primaryWhite : props.theme.colors.primaryBlack)};
`;

/*
  Numbers doesn't have any action. Ideally should be integrated with footer and navigation.
 */
function NavigationBar(props) {
  const { steps } = props;
  const mappedSteps = steps.map((step) => (
    <NavigationItem key={step.name} state={step.state}>
      <NavigationItemText state={step.state}>
        {step.name}
      </NavigationItemText>
    </NavigationItem>
  ));
  return (
    <NavigationBarContainer>
      {mappedSteps}
    </NavigationBarContainer>
  );
}

export default NavigationBar;
