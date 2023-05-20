import React from 'react';
import {Flex} from "@mantine/core";
import {Logo} from "@components/Header/Logo/index.js";
import {Navigation} from "@components/Header/Navigation/index.js";

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