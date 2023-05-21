import React from 'react';
import {Flex, Text} from "@mantine/core";
import {useStyles} from "@hooks";
import {Location as LocationIcon} from "@icons";

export const Location = ({townTitle}) => {
  const {classes} = useStyles();

  return (
    <Flex direction={"row"} gap={"12px"}>
      <LocationIcon width={"20px"} height={"20px"} alt={"location_icon"}/>
      <Text className={classes.text}>{townTitle}</Text>
    </Flex>
  );
};