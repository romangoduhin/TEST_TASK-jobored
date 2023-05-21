import React from 'react';
import {Flex} from "@mantine/core";
import {Salary} from "./Salary";
import {WorkType} from "@components/VacancyCard/Content/WorkType/index.js";
import {Location} from "@components/VacancyCard/Content/Location/index.js";

export const Content = ({
                          townTitle,
                          workType,
                          paymentTo,
                          paymentFrom,
                          currency
                        }) => {
  return (
    <Flex w={"100%"}
          direction={"column"}
          rowGap={"12px"}
          justify={"space-between"}
          align={"start"}
    >
      <Flex w={"fit-content"} direction={"row"} justify={"flex-start"} wrap={"wrap"} gap={"12px"}>
        <Salary paymentTo={paymentTo} paymentFrom={paymentFrom} currency={currency}/>
        <WorkType type={workType}/>
      </Flex>
      <Location townTitle={townTitle}/>
    </Flex>
  );
};