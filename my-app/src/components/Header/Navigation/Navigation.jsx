import React from 'react';
import {Flex} from "@mantine/core";
import {Link} from "@templates";
import {useDevice} from "@hooks";

export const Navigation = () => {
  const {isTablet, isMobile} = useDevice();

  return (
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
  );
};