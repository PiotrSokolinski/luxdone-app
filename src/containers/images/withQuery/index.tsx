import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, UseQueryResult } from 'react-query';

import Error from '../../../components/error';
import Spinner from '../../../components/spinner';
import fetchImages from '../../../queries/fetchImages';
import { useFormatMessage } from '../../../hooks/useFormatMessage';

import { Wrapper } from './styles';

const withQuery = <T extends object>(Component: React.FC<T>): React.FC<T> => {
  return (props: T) => {
    const formatMessage = useFormatMessage();
    const { breedId } = useParams() as { breedId: string };

    const { data, isLoading, error }: UseQueryResult & { error: any } = useQuery(
      ['images', { breedId }],
      () => fetchImages(breedId),
    );

    if (isLoading)
      return (
        <Wrapper>
          <Spinner />
        </Wrapper>
      );

    if (error)
      return (
        <Error icon={{ iconName: 'error', alt: formatMessage('common.errorIconAlt') }}>
          <span>{String(error.message)}</span>
        </Error>
      );

    return <Component {...props} data={data} />;
  };
};

export default withQuery;
