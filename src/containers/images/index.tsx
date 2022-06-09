import React from 'react';
import { FormattedMessage } from 'react-intl';

import Photo from '../../components/photo';
import { Image } from '../../types';
import { StoreContextType, useStateValue } from '../../store';
import { useFormatMessage } from '../../hooks/useFormatMessage';

import withQuery from './withQuery';
import { Container, Title, PhotosWrapper } from './styles';

export type ImagesType = {
  data: Image[];
};

const Images = ({ data }: ImagesType) => {
  const formatMessage = useFormatMessage();
  const [state] = useStateValue() as StoreContextType;
  return (
    <Container>
      <Title>{state.currentCat || <FormattedMessage id="images.defaultHeader" />}</Title>
      <PhotosWrapper>
        {data.map((image: Image) => (
          <Photo key={image.id} src={image.url} alt={formatMessage('images.catAlt')} />
        ))}
      </PhotosWrapper>
    </Container>
  );
};

export default withQuery(Images);
