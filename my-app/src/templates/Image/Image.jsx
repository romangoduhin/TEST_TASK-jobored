import React from 'react';

export const Image = ({width, height, src, alt = "image"}) => {
  return (
    <img width={width} height={height} src={src} alt={alt}/>
  );
};