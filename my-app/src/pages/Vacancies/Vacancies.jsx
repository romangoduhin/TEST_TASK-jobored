import React, {useEffect, useState} from 'react';
import {Loader} from "@templates";
import {superjobApi} from "@services";
import {Flex, Pagination} from "@mantine/core";
import {VacanciesList} from "@components/VacanciesList/index.js";
import {EmptyContent} from "@components";
import {isArrayEmpty} from "@helpers";

const MAX_API_ENTITIES_COUNT = 500
const INITIAL_PAGE = 1;
const PAGE_SIZE = 4;

export const Vacancies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [vacancies, setVacancies] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  const pagesCount = Math.ceil(totalCount / PAGE_SIZE);
  
  const isPaginationVisible = !!pagesCount;

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


  //TODO update onClick
  if (isArrayEmpty(vacancies) && !isLoading) return (
    <EmptyContent text={"Упс, по вашему запросу вакансии не найдены!"}
                  buttonText={"Сбросить фильтр"}
                  onClick={console.log}/>
  )

  return (
    <Flex w={"100%"} h={"100%"} direction={"column"} align={"center"}>
      {isLoading ? <Loader/> : <VacanciesList vacancies={vacancies}/>}
      {isPaginationVisible && <Pagination value={currentPage} onChange={setCurrentPage} total={pagesCount}/>}
    </Flex>
  );
};
