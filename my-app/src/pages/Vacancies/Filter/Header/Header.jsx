import React from 'react';
import {Flex, Text} from "@mantine/core";
import {TextButton} from "@templates";
import {Close} from "@icons";
import {useFilter} from "@pages/Vacancies/hooks/index.js";

export const Header = () => {
  const {resetFilter} = useFilter()

  return (
    <Flex direction={"row"} justify={"space-between"}>
      <Text size={"20px"} fw={"700"}>Фильтры</Text>
      <TextButton text={"Сбросить все"} icon={<Close/>} onClick={resetFilter}/>
    </Flex>
  );
};
