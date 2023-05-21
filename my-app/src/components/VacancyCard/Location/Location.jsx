import React from 'react';

export const Location = ({
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
      p={"24px"}
      w={"100%"}
      h={"137px"}
      direction={"column"}
      justify={"space-between"}
      align={"center"}
      bg={"white"}
    >
      {profession}
      {firm_name}
      {town_title}
      {type_of_work_title}
      {payment_to}
      {payment_from}
      {currency}
    </Flex>
  );
};