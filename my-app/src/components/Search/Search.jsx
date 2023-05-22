import React from 'react';
import {Button} from "@templates";
import {Input} from "@mantine/core";
import {Search as SearchIcon} from "@icons";

export const Search = () => {
  return (
    <Input maw={"773px"}
           w={"95%"}
           size={"md"}
           icon={<SearchIcon/>}
           rightSection={
             <Button mr={"70px"} size={"sm"} onClick={console.log}>Поиск</Button>
           }
           placeholder="Введите название вакансии"/>
  );
};
