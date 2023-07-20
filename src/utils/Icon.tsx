// src/components/Icon.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconProp;
  size?: SizeProp;
  className?: string
}

const Icon: React.FC<IconProps> = ({ icon, size, className }) => {
  return <FontAwesomeIcon size={size} icon={icon} className={className} />;
};

export default Icon;

