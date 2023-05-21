import React from 'react';
import {Box} from "@mantine/core";

export const Separator = () => {
  return <Box sx={({colors}) => ({
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    backgroundColor: colors.grey600
  })}/>
};