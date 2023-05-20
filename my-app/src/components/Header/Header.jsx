import React from 'react';
import {Flex} from "@mantine/core";
import {Logo} from "./Logo";
import {Navigation} from "./Navigation";

export const Header = () => {
  return (
    <Flex w={"100%"}
          h={"84px"}
          justify={"flex-start"}
          align={"center"}
          direction={"row"}
          bg={"white"}
    >
      <Logo/>
      <Navigation/>
    </Flex>
  );
};