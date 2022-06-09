import styled from 'styled-components';
import Icon from '../../components/icon';

export const Star = styled(Icon)`
  max-width: 1.6rem;
  max-height: 1.6rem;
`;

export const Wrapper = styled.div`
  justify-content: center;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0rem;
  }
`;

export const StarContainer = styled.label`
  display: flex;
  flex-direction: row;
  display: inline-flex;
`;

export const Name = styled.p``;
