import React from 'react';

export const Icon = ({size, src, alt = "icon"}) => {
  return (
    <img width={size} height={size} src={src} alt={alt}/>
  );
};