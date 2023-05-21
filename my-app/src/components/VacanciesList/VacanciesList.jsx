import React from 'react';
import {List} from "@templates";
import {VacancyCard} from "@components";
import {Box} from "@mantine/core";

export const VacanciesList = ({vacancies}) => {
  return (
    <Box maw={"773px"}
         w={"95%"}
         h={"100%"}
    >
      <List gap={"16px"}
            list={vacancies}
            renderItem={({item}) => (
              <VacancyCard profession={item.profession}
                           townTitle={item.town.title}
                           workType={item.type_of_work.title}
                           paymentTo={item.payment_to}
                           paymentFrom={item.payment_from}
                           currency={item.currency}
                           key={item.id}
              />
            )}
      />
    </Box>
  );
};
