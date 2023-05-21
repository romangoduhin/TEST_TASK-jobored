import React from 'react';
import {Text} from "@mantine/core";
import {Button} from "@templates";

export const Profession = ({text}) => {
  return (<>
      <Button>Text</Button>
      <Text color={"blue100"}>
        {text}
      </Text>
    </>
  );
};