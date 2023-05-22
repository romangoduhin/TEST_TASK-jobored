import React from 'react';
import {Button} from "@templates";
import {Input} from "@mantine/core";
import {Search as SearchIcon} from "@icons";

export const Search = () => {
  //TODO update search design
  return (
    <Input maw={"773px"}
           w={"100%"}
           size={"md"}
           icon={<SearchIcon/>}
           rightSection={
             <Button size={"sm"} onClick={console.log}>Поиск</Button>
           }
           rightSectionWidth={"100px"}
           placeholder="Введите название вакансии"/>
  );
};
