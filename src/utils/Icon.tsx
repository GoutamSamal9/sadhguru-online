// src/components/Icon.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconProp;
  size?: SizeProp;
  className?: string
  color?: string
}

const Icon: React.FC<IconProps> = ({ icon, size, className, color }) => {
  return <FontAwesomeIcon size={size} icon={icon} color={color} className={className} />;
};

export default Icon;

