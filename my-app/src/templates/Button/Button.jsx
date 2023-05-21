import React from 'react';
import {Button as MantineButton} from "@mantine/core";

export const Button = ({size = "md", height = "40px", onClick, children, sx, ...attrs}) => {
  return (
    <MantineButton
      sx={
        sx ? sx : {
          borderRadius: "8px",
          backgroundColor: "##5E96FC",
          '&:hover': {
            backgroundColor: "#92C1FF",
          },
          '&:active': {
            backgroundColor: "#3B7CDD",
          },
        }}
      fz={"14px"}
      h={height}
      size={size}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </MantineButton>
  );
};