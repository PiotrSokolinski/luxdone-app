import styled from 'styled-components';

const getColor = (colors: Record<string, string>, type: string): string => {
  switch (type) {
    case 'primary':
      return colors.teal;
    case 'secondary':
      return colors.milanoRed;
    case 'disabled':
      return colors.baliHai;
    default:
      return colors.white;
  }
};

const getBackgroundColor = (colors: Record<string, string>, type: string): string => {
  switch (type) {
    case 'primary':
      return colors.white;
    case 'secondary':
      return colors.white;
    case 'disabled':
      return colors.geyser;
    default:
      return colors.primary;
  }
};

export const StyledButton = styled.button<{ kind: 'primary' | 'secondary' | 'disabled' }>`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fonts.buttonStyle};
  color: ${({ theme, kind }) => getColor(theme.colors, kind)};
  background-color: ${({ theme, kind }) => getBackgroundColor(theme.colors, kind)};
  border: 1px solid ${({ theme, kind }) => getColor(theme.colors, kind)};
  border-radius: 10rem;
  cursor: ${({ kind }) => (kind === 'disabled' ? 'not-allowed' : 'pointer')};
  padding: 0.5rem 2.5rem;
  width: fit-content;
  outline: none;
  transition: background-color 0.2s;
  &:hover {
    color: ${({ theme, kind }) => kind !== 'disabled' && getBackgroundColor(theme.colors, kind)};
    background-color: ${({ theme, kind }) => kind !== 'disabled' && getColor(theme.colors, kind)};
  }
`;
