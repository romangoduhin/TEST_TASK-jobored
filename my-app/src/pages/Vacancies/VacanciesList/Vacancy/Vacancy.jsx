import React from 'react';
import {Box} from "@mantine/core";

export const Vacancy = ({
                          profession,
                          firm_name,
                          town_title,
                          type_of_work_title,
                          payment_to,
                          payment_from,
                          currency
                        }) => {
  console.log("item")
  return (
    <Box w={"70%"}
         h={"137px"}
         bg={"White"}
    >
      {profession}
      {firm_name}
      {town_title}
      {type_of_work_title}
      {payment_to}
      {payment_from}
      {currency}
    </Box>
  );
};