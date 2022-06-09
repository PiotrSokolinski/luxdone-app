import React from 'react';

import icons from './icons';
import { StyledImg } from './styles';

type IconProps = {
  iconName?: string;
  src?: string;
  alt: string;
  className?: string;
};

const Icon = ({ className, iconName, alt, src }: IconProps) => {
  return <StyledImg className={className} src={src || (iconName && icons[iconName])} alt={alt} />;
};

export default Icon;
