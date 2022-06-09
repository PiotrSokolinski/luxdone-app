import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  ${({ theme }) => theme.layout.desktop};

  ${({ theme }) => theme.media.mobile} {
    ${({ theme }) => theme.layout.mobile};
  }
`;
