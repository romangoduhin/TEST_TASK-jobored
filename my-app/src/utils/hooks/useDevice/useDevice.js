import React from 'react';
import {useMediaQuery} from "@mantine/hooks";

export const useDevice = () => {
  const isMobile = useMediaQuery('(max-width: 480px)');
  const isTablet = useMediaQuery('(min-width: 481px) and (max-width: 1024px)');
  const isLaptop = useMediaQuery('(min-width: 1025px)');

  return {isMobile, isTablet, isLaptop}
};
