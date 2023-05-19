import React from 'react';

export const Icon = ({width, height, src, alt = "icon"}) => {
  return (
    <img width={width} height={height} src={src} alt={alt}/>
  );
};