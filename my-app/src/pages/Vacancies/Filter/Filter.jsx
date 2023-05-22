import React from 'react';
import {Flex} from "@mantine/core";
import {useStyles} from "@hooks";
import {useMediaQuery} from "@mantine/hooks";
import {Header} from "./Header";
import {Content} from "./Content";

export const Filter = () => {
  const {classes} = useStyles();

  const isExpandedFilter = useMediaQuery('(max-width: 1200px)');

  return (
    <Flex p={"20px"}
          maw={"773px"}
          w={isExpandedFilter ? "80%" : "315px"}
          h={"360px"}
          direction={"column"}
          gap={"32px"}
          className={classes.card}
    >
      <Header/>
      <Content/>
    </Flex>
  );
};
