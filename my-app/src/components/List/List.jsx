import React from 'react';
import {Flex} from "@mantine/core";

export const List = ({list, renderItem}) => {
  return (
    <Flex w={"100%"}
          h={"fit-content"}
          gap={"16px"}
          justify={"center"}
          align={"center"}
          direction={"column"}
    >
      {list.map(item => (
          renderItem({item})
        )
      )}
    </Flex>
  );
};