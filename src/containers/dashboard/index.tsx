import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import withQuery from './withQuery';
import BreedCard from '../../containers/breedCard';
import { Container, Title } from './styles';
import { Breed, Vote } from '../../types';

type DashboardType = { breedsData: Breed[]; votesData: Vote[] };

const Dashboard = ({ breedsData, votesData }: DashboardType) => {
  const votePerImage = useMemo(() => {
    const initial: Record<string, number> = {};

    return votesData.reduce((acc, val) => {
      return { ...acc, [val.image_id]: val.value };
    }, initial);
  }, [breedsData, votesData]);

  return (
    <Container>
      <Title>
        <FormattedMessage id="dashboard.title" />
      </Title>
      {breedsData.map((el: Breed) => (
        <BreedCard key={el.id} {...el} vote={votePerImage[el.reference_image_id] || 0} />
      ))}
    </Container>
  );
};

export default withQuery(Dashboard);
