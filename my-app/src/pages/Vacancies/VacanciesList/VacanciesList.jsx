import React from 'react';
import {Box} from "@mantine/core";
import {List} from "@components";
import {Vacancy} from "./Vacancy";

export const VacanciesList = ({vacancies}) => {
  return (
    <Box w={"100%"} h={"100%"} bg={"red"}>
      <List list={vacancies}
            renderItem={({item}) => (
              <Vacancy profession={item.profession}
                       firm_name={item.firm_name}
                       town_title={item.town.title}
                       type_of_work_title={item.type_of_work.title}
                       payment_to={item.payment_to}
                       payment_from={item.payment_from}
                       currency={item.currency}
                       key={item.id}
              />
            )}
      />
    </Box>
  );
};
