import React from 'react';
import {Flex, Text} from "@mantine/core";
import {useStyles} from "@hooks";
import {Separator} from "@templates";

export const WorkType = ({type}) => {
  const {classes} = useStyles();

  return (
    <Flex direction={"row"} gap={"12px"} align={"center"} className={classes.text}>
      <Separator/>
      <Text>{type}</Text>
    </Flex>
  );
};