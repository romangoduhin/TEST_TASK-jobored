import React, {useEffect, useState} from 'react';
import {Loader} from "@templates";
import {superjobApi} from "@services";
import {Flex, Pagination} from "@mantine/core";
import {EmptyContent, VacanciesList} from "@components";
import {isArrayEmpty} from "@helpers";
import {Search} from "./Search";
import {Filter} from "@pages/Vacancies/Filter/index.js";
import {useFilter} from "@pages/Vacancies/hooks/index.js";

const MAX_API_ENTITIES_COUNT = 500
const INITIAL_PAGE = 1;
const PAGE_SIZE = 4;

const INITIAL_FILTER_DATA = {
  keyword: "",
  payment_from: "",
  payment_to: "",
  catalogues: "",
}

export const FilterContext = React.createContext(INITIAL_FILTER_DATA)

export const Vacancies = () => {
  const {resetFilter} = useFilter();

  const [isLoading, setIsLoading] = useState(true);
  const [vacancies, setVacancies] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [filter, setFilter] = useState(INITIAL_FILTER_DATA);

  const pagesCount = Math.ceil(totalCount / PAGE_SIZE);

  console.log("filter", filter)

  useEffect(() => {
    setIsLoading(true);

    const fetchVacancies = async () => {
      const {objects, total} = await superjobApi.getVacancies(currentPage, PAGE_SIZE)

      //TODO check it
      if (total >= MAX_API_ENTITIES_COUNT) {
        setTotalCount(MAX_API_ENTITIES_COUNT)
      } else {
        setTotalCount(total)
      }

      setVacancies(objects)
      setIsLoading(false)
    }

    fetchVacancies();
  }, [currentPage]);

  if (isLoading) return <Loader/>

  if (isArrayEmpty(vacancies) && !isLoading) return (
    <EmptyContent text={"Упс, по вашему запросу вакансии не найдены!"}
                  buttonText={"Сбросить фильтр"}
                  onClick={resetFilter}/>
  )

  return (
    <FilterContext.Provider value={{filter, setFilter}}>
      <Flex pt={"40px"}
            pb={"44px"}
            w={"100%"}
            h={"auto"}
            direction={"row"}
            justify={"center"}
            wrap={"wrap"}
            gap={"28px"}
            bg={"grey100"}>
        <Filter/>
        <Flex maw={"773px"}
              w={"80%"}
              gap={"16px"}
              direction={"column"}
              align={"center"}>
          <Search/>
          <VacanciesList vacancies={vacancies}/>
          <Pagination mt={"24px"} value={currentPage} onChange={setCurrentPage} total={pagesCount}/>
        </Flex>
      </Flex>
    </FilterContext.Provider>
  );
};
