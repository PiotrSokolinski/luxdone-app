import React from 'react';

import { StyledPhoto } from './styles';

type PhotoType = { src: string; alt: string; className?: string };

const Photo = ({ src, alt, className }: PhotoType) => (
  <StyledPhoto className={className} src={src} alt={alt} />
);

export default Photo;
