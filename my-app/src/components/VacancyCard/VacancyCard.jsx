import React from 'react';
import {Flex} from "@mantine/core";
import {Profession} from "@components/VacancyCard/Profession/index.js";

export const VacancyCard = ({
                              profession,
                              firm_name,
                              town_title,
                              type_of_work_title,
                              payment_to,
                              payment_from,
                              currency
                            }) => {
  return (
    <Flex
      sx={{
        border: "1px solid #EAEBED",
        borderRadius: "12px",
      }}
      p={"24px"}
      w={"100%"}
      h={"137px"}
      direction={"column"}
      justify={"space-between"}
      align={"start"}
      bg={"white"}
    >
      <Profession text={profession}></Profession>
      {firm_name}
      {town_title}
      {type_of_work_title}
      {payment_to}
      {payment_from}
      {currency}
    </Flex>
  );
};