import React from 'react';
import {Flex, Select, Text} from "@mantine/core";
import {Arrows} from "@icons";

export const Salary = () => {
  return (
    <Flex direction={"column"}>
      <Text fw={"700"}>Оклад</Text>
      <Select
        placeholder={"От"}
        rightSection={<Arrows/>}
        rightSectionWidth={30}
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
      <Select
        mt={"8px"}
        placeholder={"До"}
        rightSection={<Arrows/>}
        rightSectionWidth={30}
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </Flex>
  );
};
