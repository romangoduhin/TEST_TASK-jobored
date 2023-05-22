import React from 'react';
import {Text} from "@mantine/core";
import {useStyles} from "@hooks";

export const TextButton = ({
                             onClick,
                             text,
                             icon,
                             ...attrs
                           }) => {
  const {classes} = useStyles();

  return (
    <Text className={classes.textButton} onClick={onClick} {...attrs}>{text}{icon}</Text>
  );
};