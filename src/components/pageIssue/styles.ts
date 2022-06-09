import styled from 'styled-components';

import Icon from '../icon';

export const StyledIcon = styled(Icon)`
  max-width: 512px;
  max-height: 512px;
  width: 100%;
  height: auto;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.h1`
  margin-top: 2rem;
  text-align: center;
  ${({ theme }) => theme.media.mobile} {
    margin-top: 1rem;
  }
`;

export const Subheader = styled.h2`
  margin-top: 3rem;
  margin-bottom: 5rem;
  text-align: center;

  ${({ theme }) => theme.media.mobile} {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  button:first-of-type {
    margin-right: 2rem;
  }
  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    align-items: center;
    button:first-of-type {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;
