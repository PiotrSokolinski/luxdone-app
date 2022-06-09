import React from 'react';
import { LoadingType } from 'react-loading';
import { useTheme } from 'styled-components';

import { ThemeType } from '../../theme';

import { StyledReactLoading } from './styles';

type SpinnerType = {
  type?: LoadingType;
  color?: string;
  height?: string;
  width?: string;
  delay?: number;
  className?: string;
};

const Spinner = ({
  delay,
  className,
  type = 'spin',
  color,
  height = 'auto',
  width = '20rem',
}: SpinnerType) => {
  const theme = useTheme() as ThemeType;

  return (
    <StyledReactLoading
      className={className}
      type={type}
      color={color || theme.colors.blueDianne}
      height={height}
      width={width}
      delay={delay}
    />
  );
};

export default Spinner;
