import React from 'react';
import {Button} from "@templates";
import {Search as SearchIcon} from "@icons";
import {useFilter} from "../hooks";
import {TextInput} from "@mantine/core";

export const Search = () => {
  const {filter, updateFilter} = useFilter()

  const handleChange = (event) => {
    const keyword = event.currentTarget.value

    updateFilter("keyword", keyword)
  }

  //TODO update search design
  return (
    <TextInput maw={"773px"}
               w={"100%"}
               size={"md"}
               icon={<SearchIcon/>}
               rightSection={
                 <Button size={"sm"} onClick={console.log}>Поиск</Button>
               }
               rightSectionWidth={"100px"}
               placeholder="Введите название вакансии"
               value={filter.keyword}
               onChange={handleChange}
    />
  );
};
