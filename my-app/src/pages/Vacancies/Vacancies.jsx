import React, {useEffect, useState} from 'react';
import {Loader} from "@templates";
import {superjobApi} from "@services";
import {Box} from "@mantine/core";
import {VacanciesList} from "@pages/Vacancies/VacanciesList/index.js";
import {EmptyContent} from "@components";
import {isArrayEmpty} from "@helpers";

export const Vacancies = () => {
  const [vacancies, setVacancies] = useState(null);

  const fetchVacancies = async () => {
    const {objects} = await superjobApi.getVacancies()

    setVacancies(objects)
  }

  useEffect(() => {
    fetchVacancies();
  }, []);

  if (!vacancies) return <Loader/>

  //TODO update onClick
  if (isArrayEmpty(vacancies)) return (
    <EmptyContent text={"Упс, по вашему запросу вакансии не найдены!"}
                  buttonText={"Сбросить фильтр"}
                  onClick={console.log}/>
  )

  return (
    <Box w={"100%"} h={"100%"} bg={"red"}>
      <VacanciesList vacancies={vacancies}/>
    </Box>
  );
};
