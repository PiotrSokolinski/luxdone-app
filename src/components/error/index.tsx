import React from 'react';

import { Container, Text, Image } from './styles';

type ErrorType = {
  className?: string;
  icon: { iconName: string; alt: string };
  children: React.ReactNode;
};

const Error = ({ className, children, icon }: ErrorType) => (
  <Container className={className}>
    <Image {...icon} />
    <Text>{children}</Text>
  </Container>
);

export default Error;
