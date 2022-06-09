import { css } from 'styled-components';

const fonts: Record<string, any> = {
  h1: {
    desktop: {
      family: 'Poppins, sans-serif',
      weight: 'bold',
      size: '1.8rem',
      lineHeight: '2.7rem',
      spacing: '0.02em',
    },
    mobile: {
      family: 'Poppins, sans-serif',
      weight: 'bold',
      size: '1.8rem',
      lineHeight: '2.7rem',
      spacing: '0.02em',
    },
  },
  h2: {
    desktop: {
      family: 'Poppins, sans-serif',
      weight: 'bold',
      size: '1.5rem',
      lineHeight: '2.1rem',
      spacing: '0.02em',
    },
    mobile: {
      family: 'Poppins, sans-serif',
      weight: 'bold',
      size: '1.3rem',
      lineHeight: '1.9rem',
      spacing: 0,
    },
  },
  h3: {
    desktop: {
      family: 'Poppins, sans-serif',
      weight: 'bold',
      size: '1.3rem',
      lineHeight: '1.9rem',
      spacing: 0,
    },
    mobile: {
      family: 'Poppins, sans-serif',
      weight: 'bold',
      size: '1.3rem',
      lineHeight: '1.9rem',
      spacing: 0,
    },
  },
  primary: {
    desktop: {
      family: 'Poppins, sans-serif',
      weight: 'normal',
      size: '1.3rem',
      lineHeight: '1.9rem',
      spacing: '0.03em',
    },
    mobile: {
      family: 'Poppins, sans-serif',
      weight: 'normal',
      size: '1.3rem',
      lineHeight: '1.9rem',
      spacing: '0.03em',
    },
  },
  secondary: {
    desktop: {
      family: 'Poppins, sans-serif',
      weight: 'normal',
      size: '1.3rem',
      lineHeight: '1.9rem',
      spacing: '0.03em',
    },
    mobile: {
      family: 'Poppins, sans-serif',
      weight: 'normal',
      size: '1.3rem',
      lineHeight: '1.9rem',
      spacing: '0.03em',
    },
  },
  button: {
    desktop: {
      family: 'Poppins, sans-serif',
      weight: 700,
      size: '1.3rem',
      lineHeight: '1.9rem',
      spacing: '0.02em',
    },
    mobile: {
      family: 'Poppins, sans-serif',
      weight: 700,
      size: '1.1rem',
      lineHeight: '1.7rem',
      spacing: '0.02em',
    },
  },
};

fonts.p = fonts.primary;

Object.keys(fonts).forEach((key) => {
  fonts[`${key}Style`] = css`
    ${({ theme }) => `
    font-family: ${fonts[key].desktop.family};
    font-weight: ${fonts[key].desktop.weight};
    font-size: ${fonts[key].desktop.size};
    letter-spacing: ${fonts[key].desktop.spacing};
    line-Height: ${fonts[key].desktop.lineHeight};

    ${theme.media.mobile} {
      font-family: ${fonts[key].mobile.family};
      font-weight: ${fonts[key].mobile.weight};
      font-size: ${fonts[key].mobile.size};
      letter-spacing: ${fonts[key].mobile.spacing};
      line-Height: ${fonts[key].mobile.lineHeight};
    }
  `}
  `;
});

export default fonts;
