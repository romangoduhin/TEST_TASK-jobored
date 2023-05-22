import React from 'react';
import {Flex, Select, Text} from "@mantine/core";
import {Down} from "@icons";

export const Industries = () => {
  return (
    <Flex direction={"column"}>
      <Text fw={"700"}>Отрасль</Text>
      <Select
        placeholder={"Выберите отрасль"}
        rightSection={<Down/>}
        rightSectionWidth={30}
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </Flex>
  );
};
