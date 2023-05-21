import React from 'react';
import {Flex} from "@mantine/core";
import {Profession} from "@components/VacancyCard/Header/Profession/index.js";
import {FavoriteButton} from "@components/VacancyCard/Header/FavoriteButton/index.js";

export const Header = ({profession}) => {
  return (
    <Flex w={"100%"} direction={"row"} justify={"space-between"}>
      <Profession text={profession}/>
      {/*TODO update it*/}
      <FavoriteButton onClick={() => console.log('ss')}/>
    </Flex>
  );
};