import React from 'react';
import {Flex, NumberInput, Text} from "@mantine/core";
import {useFilter} from "../../../hooks";
import {Arrows} from "@icons";

export const Salary = () => {
  const {filter, updateFilter} = useFilter()

  return (
    <Flex direction={"column"}>
      <Text fw={"700"}>Оклад</Text>
      <NumberInput placeholder={"От"}
                   rightSection={<Arrows/>}
                   rightSectionWidth={30}
                   value={filter.payment_from}
                   onChange={(value) => updateFilter("payment_from", value)}
                   type={"number"}
      />
      <NumberInput mt={"8px"}
                   placeholder={"До"}
                   rightSection={<Arrows/>}
                   rightSectionWidth={30}
                   value={filter.payment_to}
                   onChange={(value) => updateFilter("payment_to", value)}
                   id={"payment_to"}
                   type={"number"}
      />
    </Flex>
  );
};
