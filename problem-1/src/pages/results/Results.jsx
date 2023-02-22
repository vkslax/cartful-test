import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../components/link-button/LinkButton';
import CoffeeOption from '../../components/coffee-option/CoffeeOption';
import product from '../../assets/results/product.jpg';
import CoffeeCharacteristic from '../../components/coffee-characteristic/CoffeeCharacteristic';
import tastingNotesIcon from '../../assets/results/tasting-notes.svg';
import roastLevelMediumIcon from '../../assets/results/roast_level_medium.svg';
import sippingMilkCream from '../../assets/results/sipping_milk_cream.svg';
import pourOverIcon from '../../assets/q2/pour-over-desktop.svg';

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
  align-items: center;
`;
const QuestionText = styled.h1`
  font-weight: 400;
`;
const SubtitleText = styled.p`
font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  `;
const LinksContainer = styled.div`
  display: flex;
  width: 300px;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
`;
const BestMatchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  background-color: ${(props) => props.theme.colors.primaryDarkBeige};
  width: 60%;
`;

const BestMatchLeft = styled.div`
  display: flex;
  width: 33%;
`;

const BestMatchRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 66%;
  `;
const BestMatchRightUpper = styled.div`
  width: 100%;
  border-left: 1.5px dashed rgba(0, 0, 0, .5);
  border-bottom: 1.5px dashed rgba(0, 0, 0, .5);
`;
const BestMatchRightLowerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  `;
const BestMatchRightLower = styled.div`
  display: flex;
  border-left: 1.5px dashed rgba(0, 0, 0, .5);
  width: 25%;
`;
const LoveItTitle = styled.p`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  opacity: 0.7;
  margin-left: 1rem;
`;
const LoveItText = styled.p`
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  margin: 1.5rem 4rem 1.5rem 4rem;
`;
function Results() {
  return (
    <ResultsContainer>
      <QuestionText>MEET YOUR NEW FAVORITE COFFEE</QuestionText>
      <SubtitleText>
        Here’s what we recommend for your busy days, quiet moments,
        and upcoming adventures.
      </SubtitleText>
      <LinksContainer>
        <LinkButton text="Email my results" />
        <LinkButton text="Retake the quiz" />
      </LinksContainer>
      <BestMatchContainer>
        <BestMatchLeft>
          <CoffeeOption title="BEST MATCH" picture={product} coffeName="GUATEMALA COFFEE" price="$20.50" />
        </BestMatchLeft>
        <BestMatchRight>
          <BestMatchRightUpper>
            <LoveItTitle>WHY YOU&#39;LL LOVE IT</LoveItTitle>
            <LoveItText>
              If you&#39;ve ever taken a bite from a ripe red apple,
              you&#39;ll know the way this coffee tastes.
            </LoveItText>
          </BestMatchRightUpper>
          <BestMatchRightLowerContainer>
            <BestMatchRightLower>
              <CoffeeCharacteristic
                title="TASTING NOTES"
                icon={tastingNotesIcon}
                description="Red Apple, Lemongrass, Malt Chocolate"
              />
            </BestMatchRightLower>
            <BestMatchRightLower>
              <CoffeeCharacteristic
                title="ROAST LEVEL"
                icon={roastLevelMediumIcon}
                description="Medium"
              />
            </BestMatchRightLower>
            <BestMatchRightLower>
              <CoffeeCharacteristic
                title="SIPPING STYLE"
                icon={sippingMilkCream}
                description="Great with milk/cream"
              />
            </BestMatchRightLower>
            <BestMatchRightLower>
              <CoffeeCharacteristic
                title="BREW METHOD"
                icon={pourOverIcon}
                description="Brews a delicious cup with a pour over"
              />
            </BestMatchRightLower>
          </BestMatchRightLowerContainer>
        </BestMatchRight>
      </BestMatchContainer>
    </ResultsContainer>
  );
}

export default Results;
