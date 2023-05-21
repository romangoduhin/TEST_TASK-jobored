import React from 'react';
import {Center, Loader as MantineLoader, Text} from "@mantine/core";

export const Loader = ({size = "xl", text, ...attrs}) => {
  return (
    <Center w={"100%"} h={"100%"} sx={{
      display: "flex",
      flexDirection: "column",
      gap: '10px'
    }}>
      <MantineLoader size={size} {...attrs}/>
      {text && <Text size={"xl"}>{text}</Text>}
    </Center>
  );
};