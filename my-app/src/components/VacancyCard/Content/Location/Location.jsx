import React from 'react';
import {Flex, Text} from "@mantine/core";
import {Location as LocationIcon} from "@icons";

export const Location = ({townTitle}) => {
  return (
    <Flex direction={"row"} gap={"12px"}>
      <LocationIcon width={"20px"} height={"20px"} alt={"location_icon"}/>
      <Text>{townTitle}</Text>
    </Flex>
  );
};