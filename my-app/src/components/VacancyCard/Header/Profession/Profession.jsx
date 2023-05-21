import React from 'react';
import {Text} from "@mantine/core";
import {useStyles} from "@hooks";

export const Profession = ({text}) => {
  const {classes} = useStyles();

  return (
    <Text w={"90%"} fz={"20px"} fw={"600"} color={"blue500"} className={classes.text}>
      {text}
    </Text>
  );
};