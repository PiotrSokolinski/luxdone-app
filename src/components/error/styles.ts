import styled from 'styled-components';

import Icon from '../icon';

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-height: 10rem;
  max-width: 50%;
`;

export const Image = styled(Icon)`
  display: flex;
  align-self: flex-start;
  max-height: 10rem;
  max-width: auto;
`;

export const Text = styled.p`
  margin-left: 1rem;
  font-size: 2.5rem;
  line-height: 3rem;
`;
