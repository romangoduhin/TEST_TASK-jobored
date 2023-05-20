import React from 'react';
import {Center} from "@mantine/core";
import {Logo as BigLogo} from "@images";
import {Logo as SmallLogo} from "@icons";
import {useDevice} from "@hooks";
import {Image} from "@templates";

export const Logo = () => {
  const {isMobile} = useDevice();

  return (
    <Center w={isMobile ? "20%" : "32%"}
            h={"100%"}
    >
      <Image src={isMobile ? SmallLogo : BigLogo} alt={"logo"}/>
    </Center>
  );
};