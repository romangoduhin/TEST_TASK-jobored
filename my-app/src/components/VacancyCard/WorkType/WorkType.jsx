import React from 'react';
import {Box} from "@mantine/core";

export const WorkType = ({
                           profession,
                           firm_name,
                           town_title,
                           type_of_work_title,
                           payment_to,
                           payment_from,
                           currency
                         }) => {
  return (
    <Box
      p={"24px"}
      w={"100%"}
      h={"137px"}
      bg={theme.colors.white}
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