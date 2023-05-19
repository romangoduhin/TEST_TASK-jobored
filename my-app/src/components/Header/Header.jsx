import React from 'react';
import {Box, Center, Flex} from "@mantine/core";
import {Icon, Link} from "@components";
import {Logo} from "@images";

export const Header = () => {
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
            wrap="wrap"
      >
        <Center w={"32%"}
                h={"100%"}
        >
          <Icon src={Logo} alt={"logo"}/>
        </Center>
        <Flex w={"36%"}
              h={"100%"}
              justify="center"
              align="center"
              direction="row"
              wrap="wrap"
              gap={"60px"}
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