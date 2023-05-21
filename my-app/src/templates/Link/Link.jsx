import React from 'react';
import {Link as RouterLink, useLocation} from "react-router-dom";
import {Text} from "@mantine/core";
import {useStyles} from "@hooks";

export const Link = ({to, children, ...attrs}) => {
  const {classes} = useStyles();

  const {pathname} = useLocation();
  const isActive = to === pathname;
  
  return (
    <RouterLink to={to}>
      <Text className={isActive ? classes.activeText : classes.text} {...attrs}>{children}</Text>
    </RouterLink>
  );
};