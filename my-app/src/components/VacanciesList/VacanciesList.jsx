import React from 'react';
import {List} from "@templates";
import {VacancyCard} from "@components";
import {Box} from "@mantine/core";

export const VacanciesList = ({vacancies}) => {
  return (
    <Box maw={"773px"}
         w={"95%"}
         h={"100%"}
         bg={"blue"}
    >
      <List gap={"16px"}
            list={vacancies}
            renderItem={({item}) => (
              <VacancyCard profession={item.profession}
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
