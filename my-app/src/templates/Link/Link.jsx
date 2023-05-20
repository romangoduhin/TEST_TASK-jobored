import React from 'react';
import {Link as RouterLink, useLocation} from "react-router-dom";
import {Text} from "@mantine/core";

export const Link = ({to, children}) => {
  const {pathname} = useLocation()
  const isActive = to === pathname

  return (
    <RouterLink to={to}>
      <Text color={isActive ? "blue" : "black"}>{children}</Text>
    </RouterLink>
  );
};