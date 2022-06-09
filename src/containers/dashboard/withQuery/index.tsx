import React from 'react';
import { get } from 'lodash';
import { useQuery, UseQueryResult } from 'react-query';

import Error from '../../../components/error';
import Spinner from '../../../components/spinner';
import fetchBreeds from '../../../queries/fetchBreeds';
import fetchVotes from '../../../queries/fetchVotes';
import { useFormatMessage } from '../../../hooks/useFormatMessage';

import { Wrapper } from './styles';

const withQuery = <T extends object>(Component: React.FC<T>): React.FC<T> => {
  return (props: T) => {
    const formatMessage = useFormatMessage();

    const {
      data: breedsData,
      isLoading: breedsIsLoading,
      error: breedsIsError,
    }: UseQueryResult = useQuery('breeds', fetchBreeds);

    const {
      data: votesData,
      isLoading: votesIsLoading,
      error: votesIsError,
    }: UseQueryResult = useQuery(['votes', { subId: process.env.REACT_APP_API_KEY }], () =>
      fetchVotes(process.env.REACT_APP_API_KEY as string),
    );

    if (breedsIsLoading || votesIsLoading)
      return (
        <Wrapper>
          <Spinner />
        </Wrapper>
      );

    if (breedsIsError || votesIsError)
      return (
        <Error icon={{ iconName: 'error', alt: formatMessage('common.errorIconAlt') }}>
          <span>{get(breedsIsError || votesIsError, 'message', '')}</span>
        </Error>
      );

    return <Component {...props} breedsData={breedsData} votesData={votesData} />;
  };
};

export default withQuery;
