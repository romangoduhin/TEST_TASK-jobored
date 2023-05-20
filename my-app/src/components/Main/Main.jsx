import React from 'react';
import {Box} from "@mantine/core";

export const Main = ({children}) => {
  return (
    <Box w={"100%"}
         h={"calc(100% - 84px)"}
         bg={"#F7F7F8"}
    >
      {children}
    </Box>
  );
};