import React from 'react';

import { StyledButton } from './styles';

type ButtonProps = {
  children: React.ReactNode;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  kind?: 'primary' | 'secondary' | 'disabled';
  className?: string;
  loading?: boolean;
};

const Button = ({ className, children, handleClick, kind = 'primary' }: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      onClick={handleClick}
      kind={kind}
      disabled={kind === 'disabled'}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
