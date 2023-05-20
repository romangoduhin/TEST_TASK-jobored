import React from 'react';
import {Flex, Text} from "@mantine/core";
import {EmptyContent as EmptyContentImage} from "@images";
import {Button, Image} from "@templates";

export const EmptyContent = ({text, buttonText, onClick}) => {
  return (
    <Flex w={"fit-content"}
          h={"fit-content"}
          justify={"center"}
          align={"center"}
          direction={"column"}
          gap={"32px"}
    >
      <Image src={EmptyContentImage}/>
      <Text fz="24px">{text}</Text>
      <Button height={"42px"}
              sx={{
                color: "#3B7CD3",
                backgroundColor: "#DEECFF",
                '&:hover': {
                  color: "white",
                },
              }}
              onClick={onClick}
      >
        {buttonText}
      </Button>
    </Flex>
  );
};