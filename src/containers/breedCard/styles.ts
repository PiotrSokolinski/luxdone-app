import styled from 'styled-components';

import Icon from '../../components/icon';
import Button from '../../components/button';

export const WikipediaButton = styled(Button)``;

export const ThumbIcon = styled(Icon)`
  height: 1.6rem;
  width: 1.6rem;
`;

export const HeartIcon = styled(Icon)`
  height: 2.4rem;
  width: 2.4rem;
`;

export const UpVoteButton = styled(Button)`
  margin-right: 0.5rem;
`;
export const DownVoteButton = styled(Button)`
  align-self: flex-end;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  justify-content: flex-end;
  align-items: center;
`;

export const Image = styled(Icon)`
  max-height: 100%;
  max-width: 40rem;
  border-radius: 1rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 20px ${({ theme }) => theme.helpers.hexToRgba(theme.colors.downriver, 0.05)};
  border-radius: 1rem;
  padding: 0;
  display: flex;
  margin-bottom: 1.5rem;
  max-width: 100rem;
  max-height: 32rem;
  cursor: pointer;
  ${({ theme }) => theme.media.mobile} {
    max-width: 100%;
    max-height: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const Title = styled.h1``;

export const Description = styled.p`
  margin-bottom: 1rem;
`;

export const ScoresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const HeartContainer = styled.div`
  margin: 0 2rem;
  display: flex;
  align-items: center;
`;
