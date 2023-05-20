import React from 'react';
import {Center} from "@mantine/core";
import {Icon} from "@components";
import {Logo as BigLogo} from "@images";
import {Logo as SmallLogo} from "@icons";
import {useDevice} from "@hooks";

export const Logo = () => {
  const {isMobile} = useDevice();

  return (
    <Center w={isMobile ? "20%" : "32%"}
            h={"100%"}
    >
      <Icon src={isMobile ? SmallLogo : BigLogo} alt={"logo"}/>
    </Center>
  );
};