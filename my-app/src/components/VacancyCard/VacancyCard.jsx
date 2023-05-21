import React from 'react';
import {Flex} from "@mantine/core";
import {Profession} from "@components/VacancyCard/Profession/index.js";
import {useStyles} from "@hooks";

export const VacancyCard = ({
                              profession,
                              firm_name,
                              town_title,
                              type_of_work_title,
                              payment_to,
                              payment_from,
                              currency
                            }) => {
  const {classes} = useStyles();

  return (
    <Flex
      className={classes.card}
      w={"100%"}
      h={"137px"}
      direction={"column"}
      justify={"space-between"}
      align={"start"}
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