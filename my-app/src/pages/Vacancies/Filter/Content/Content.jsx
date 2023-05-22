import React from 'react';
import {Flex} from "@mantine/core";
import {Industries} from "./Industries";
import {Salary} from "@pages/Vacancies/Filter/Content/Salary/index.js";
import {Button} from "@templates";

export const Content = () => {
  return (
    <Flex direction={"column"} gap={"20px"}>
      <Industries/>
      <Salary/>
      <Button onClick={console.log}>Применить</Button>
    </Flex>
  );
};
