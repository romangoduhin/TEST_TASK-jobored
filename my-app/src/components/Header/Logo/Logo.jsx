import React from 'react';
import {Center} from "@mantine/core";
import {BigLogo, SmallLogo} from "@images";
import {useDevice} from "@hooks";

export const Logo = () => {
  const {isMobile} = useDevice();

  return (
    <Center w={isMobile ? "20%" : "32%"} h={"100%"}>
      {isMobile ? <SmallLogo/> : <BigLogo/>}
    </Center>
  );
};