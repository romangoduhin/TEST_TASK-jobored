import React from 'react';
import {EmptyContent as EmptyContentImage} from "@images";
import {Button} from "@templates";
import {useStyles} from "@hooks";
import {Center, Flex} from "@mantine/core";

export const EmptyContent = ({text, buttonText, onClick}) => {
  const {classes} = useStyles();

  return (
    <Center w={"100%"} h={"100%"}>
      <Flex w={"fit-content"}
            h={"fit-content"}
            justify={"center"}
            align={"center"}
            direction={"column"}
            gap={"32px"}
      >
        <EmptyContentImage/>
        <Text align={"center"} fz="24px">{text}</Text>
        <Button className={classes.lightButton} onClick={onClick}>
          {buttonText}
        </Button>
      </Flex>
    </Center>
  );
};