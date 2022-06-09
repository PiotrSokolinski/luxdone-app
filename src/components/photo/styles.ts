import styled from 'styled-components';

export const StyledPhoto = styled.img`
  max-width: 40rem;
  max-height: 30rem;
  width: 50%:
  height: auto;
  border-radius: 1rem;
  
   ${({ theme }) => theme.media.mobile} {
    max-width: 100%;
  }
`;
