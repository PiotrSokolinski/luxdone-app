import React from 'react';
import startCase from 'lodash/startCase';

import { useFormatMessage } from '../../hooks/useFormatMessage';

import { Wrapper, StarContainer, Star, Name } from './styles';

type ScoreType = {
  amount: number;
  name: string;
};

const Score = ({ amount, name }: ScoreType) => {
  const formatMessage = useFormatMessage();

  return (
    <Wrapper>
      <Name>{startCase(name)}</Name>
      {[...Array(5)].map((_, index) => {
        const isFullStar = index < amount;
        return (
          <StarContainer key={index}>
            <Star
              iconName={isFullStar ? 'star' : 'emptyStar'}
              alt={formatMessage(`score.${isFullStar ? 'starAlt' : 'emptyStarAlt'}`)}
            />
          </StarContainer>
        );
      })}
    </Wrapper>
  );
};

export default Score;
