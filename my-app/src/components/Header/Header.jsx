import React from 'react';
import {Box, Center, Flex} from "@mantine/core";
import {Icon, Link} from "@components";
import {Logo as BigLogo} from "@images";
import {Logo as SmallLogo} from "@icons";
import {useDevice} from "@hooks";

export const Header = () => {
  const {isTablet, isMobile} = useDevice();

  return (
    <Box w={"100%"}
         h={"84px"}
         bg={"white"}
    >
      <Flex w={"100%"}
            h={"100%"}
            justify="flex-start"
            align="center"
            direction="row"

      >
        <Center w={isMobile ? "20%" : "32%"}
                h={"100%"}
        >
          <Icon src={isMobile ? SmallLogo : BigLogo} alt={"logo"}/>
        </Center>
        <Flex w={isTablet || isMobile ? "80%" : "36%"}
              h={"100%"}
              justify="center"
              align="center"
              direction="row"
              wrap="wrap"
              gap={isMobile ? "10%" : "60px"}
              cursor={"pointer"}
        >
          <Link to={"/vacancies"}>
            Поиск Вакансий
          </Link>

          <Link to={"/favorites"}>
            Избранное
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};