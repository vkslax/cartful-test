import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import theme from '../../Theme';
import coffeeMakerIcon from '../../assets/q2/coffee-maker-desktop.svg';
import frenchPressIcon from '../../assets/q2/french-press-desktop.svg';
import pourOverIcon from '../../assets/q2/pour-over-desktop.svg';
import mokaPotIcon from '../../assets/q2/moka-pot-desktop.svg';
import aeropressIcon from '../../assets/q2/aeropress-desktop.svg';
import espressoIcon from '../../assets/q2/espresso-desktop.svg';
import podsIcon from '../../assets/q2/pods-desktop.svg';
import BrewOption from '../../components/brew-option/BrewOption';
import {
  COFFEE_MAKER, FRENCH_PRESS, AERO_PRESS, PODS, ESPRESSO, MOKA_POT, POUR_OVER,
} from '../../constants/constants';
import Button from '../../components/button/Button';
import Footer from '../../components/footer/Footer';

/* ---------------------------- STYLED COMPONENTS ---------------------------- */
const QuestionContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;  
  `;
const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  min-height: 35vh;
  flex-wrap: wrap;
`;

const QuestionText = styled.h1`
  font-weight: 400;
  padding: 1rem;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}){
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

const FirstLeftItem = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}){
    transform:rotate(-12deg) translateY(56px);
  }
`;
const SecondLeftItem = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}){
    transform:rotate(-8deg) translateY(24px);
  }
`;
const ThirdLeftItem = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}){
    transform:rotate(-4deg) translateY(6px);
  }
`;
const CenterItem = styled.div`
  `;
const FirstRightItem = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}){
    transform:rotate(4deg) translateY(6px);
  }
`;
const SecondRightItem = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}){
    transform:rotate(8deg) translateY(24px);
  }
`;
const ThirdRightItem = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}){
    transform:rotate(12deg) translateY(56px);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Question2() {
  const navigate = useNavigate();
  /* ---------------------------- STATE ---------------------------- */
  const [coffeeMakerAttenuate, setCoffeeMakerAttenuate] = useState(false);
  const [frenchPressAttenuate, setFrenchPressMakerAttenuate] = useState(false);
  const [pourOverAttenuate, setPourOverAttenuate] = useState(false);
  const [mokaPotAttenuate, setMokaPotAttenuate] = useState(false);
  const [aeropressAttenuate, setAeropressAttenuate] = useState(false);
  const [espressoAttenuate, setEspressoAttenuate] = useState(false);
  const [podsAttenuate, setPodsAttenuate] = useState(false);

  const [selectedOption, setSelectedOption] = useState('');
  /* ---------------------------- FUNCTIONS ---------------------------- */
  useEffect(() => {
    switch (selectedOption) {
      case COFFEE_MAKER:
        setCoffeeMakerAttenuate(false);
        setFrenchPressMakerAttenuate(true);
        setPourOverAttenuate(true);
        setMokaPotAttenuate(true);
        setAeropressAttenuate(true);
        setEspressoAttenuate(true);
        setPodsAttenuate(true);
        break;
      case FRENCH_PRESS:
        setCoffeeMakerAttenuate(true);
        setFrenchPressMakerAttenuate(false);
        setPourOverAttenuate(true);
        setMokaPotAttenuate(true);
        setAeropressAttenuate(true);
        setEspressoAttenuate(true);
        setPodsAttenuate(true);
        break;
      case POUR_OVER:
        setCoffeeMakerAttenuate(true);
        setFrenchPressMakerAttenuate(true);
        setPourOverAttenuate(false);
        setMokaPotAttenuate(true);
        setAeropressAttenuate(true);
        setEspressoAttenuate(true);
        setPodsAttenuate(true);
        break;
      case MOKA_POT:
        setCoffeeMakerAttenuate(true);
        setFrenchPressMakerAttenuate(true);
        setPourOverAttenuate(true);
        setMokaPotAttenuate(false);
        setAeropressAttenuate(true);
        setEspressoAttenuate(true);
        setPodsAttenuate(true);
        break;
      case AERO_PRESS:
        setCoffeeMakerAttenuate(true);
        setFrenchPressMakerAttenuate(true);
        setPourOverAttenuate(true);
        setMokaPotAttenuate(true);
        setAeropressAttenuate(false);
        setEspressoAttenuate(true);
        setPodsAttenuate(true);
        break;
      case ESPRESSO:
        setCoffeeMakerAttenuate(true);
        setFrenchPressMakerAttenuate(true);
        setPourOverAttenuate(true);
        setMokaPotAttenuate(true);
        setAeropressAttenuate(true);
        setEspressoAttenuate(false);
        setPodsAttenuate(true);
        break;
      case PODS:
        setCoffeeMakerAttenuate(true);
        setFrenchPressMakerAttenuate(true);
        setPourOverAttenuate(true);
        setMokaPotAttenuate(true);
        setAeropressAttenuate(true);
        setEspressoAttenuate(true);
        setPodsAttenuate(false);
        break;
      default:
        break;
    }
  }, [selectedOption]);

  const handleContinue = () => {
    navigate('/results');
  };
  /* REFACTOR SUGGESTION: Auto-generate the options based on a JSON.
   Structure of JSON:
   {
     options:[
     {
       color: theme.colors.secondarySeabrightYellow,
       icon: coffeeMakerIcon,
       text: "Coffee Maker",
       isSelected: false
     }
   ]}
   It was not done at this time because of the design, this will need to calculate
   angles and spaces on the styled components and will require even more time to develop.
   Regarding the handling of the selection,the current solution is a quick and dirty, but could be
   handled in the proposed array.
  */
  return (
    <QuestionContainer>
      <QuestionText>HOW DO YOU BREW AT HOME?</QuestionText>
      <OptionsContainer>
        <FirstLeftItem onClick={() => setSelectedOption(COFFEE_MAKER)}>
          <BrewOption color={theme.colors.secondarySeabrightYellow} icon={coffeeMakerIcon} text="Coffee Maker" attenuate={coffeeMakerAttenuate} />
        </FirstLeftItem>
        <SecondLeftItem onClick={() => setSelectedOption(FRENCH_PRESS)}>
          <BrewOption color={theme.colors.secondaryBronsonGreen} icon={frenchPressIcon} text="French Press" attenuate={frenchPressAttenuate} />
        </SecondLeftItem>
        <ThirdLeftItem onClick={() => setSelectedOption(POUR_OVER)}>
          <BrewOption color={theme.colors.secondarySermonPink} icon={pourOverIcon} text="Pour Over" attenuate={pourOverAttenuate} />
        </ThirdLeftItem>
        <CenterItem onClick={() => setSelectedOption(AERO_PRESS)}>
          <BrewOption color={theme.colors.secondaryBuenaVistaRed} icon={aeropressIcon} text="AeroPress" attenuate={aeropressAttenuate} />
        </CenterItem>
        <FirstRightItem onClick={() => setSelectedOption(ESPRESSO)}>
          <BrewOption color={theme.colors.secondaryLatinAmericaBlue} icon={espressoIcon} text="Espresso" attenuate={espressoAttenuate} />
        </FirstRightItem>
        <SecondRightItem onClick={() => setSelectedOption(PODS)}>
          <BrewOption color={theme.colors.secondaryChocolate} icon={podsIcon} text="Pods" attenuate={podsAttenuate} />
        </SecondRightItem>
        <ThirdRightItem onClick={() => setSelectedOption(MOKA_POT)}>
          <BrewOption color={theme.colors.secondary1950Gray} icon={mokaPotIcon} text="Moka Pot" attenuate={mokaPotAttenuate} />
        </ThirdRightItem>
      </OptionsContainer>
      <ButtonContainer>
        <Button onClick={() => handleContinue()} text="CONTINUE" />
      </ButtonContainer>
      <Footer />
    </QuestionContainer>
  );
}

export default Question2;
