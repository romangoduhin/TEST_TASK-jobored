import React from 'react';
import {Flex, Text} from "@mantine/core";
import {Separator} from "@templates";

export const WorkType = ({type}) => {
  return (
    <Flex direction={"row"} gap={"12px"} align={"center"}>
      <Separator/>
      <Text>{type}</Text>
    </Flex>
  );
};