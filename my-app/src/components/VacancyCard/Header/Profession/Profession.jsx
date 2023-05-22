import React from 'react';
import {Text} from "@mantine/core";

export const Profession = ({text}) => {
  return (
    <Text w={"90%"} fz={"20px"} fw={"600"} color={"blue500"}>
      {text}
    </Text>
  );
};