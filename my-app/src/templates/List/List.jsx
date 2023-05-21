import React from 'react';
import {Flex} from "@mantine/core";

export const List = ({list, renderItem, ...attrs}) => {
  return (
    <Flex w={"100%"}
          h={"fit-content"}
          justify={"center"}
          align={"center"}
          direction={"column"}
          {...attrs}
    >
      {list.map(item => (
          renderItem({item})
        )
      )}
    </Flex>
  );
};