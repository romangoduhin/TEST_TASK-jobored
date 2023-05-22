import React from 'react';
import {Flex, Text} from "@mantine/core";
import {TextButton} from "@templates";
import {Close} from "@icons";

export const Header = () => {
  return (
    <Flex direction={"row"} justify={"space-between"}>
      <Text size={"20px"} fw={"700"}>Фильтры</Text>
      <TextButton text={"Сбросить все"} icon={<Close/>}/>
    </Flex>
  );
};
