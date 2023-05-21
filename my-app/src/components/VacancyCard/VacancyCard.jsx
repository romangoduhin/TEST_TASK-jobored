import React from 'react';
import {Flex} from "@mantine/core";
import {useStyles} from "@hooks";
import {Header} from "./Header";
import {Content} from "./Content";

export const VacancyCard = ({
                              profession,
                              firmName,
                              townTitle,
                              workType,
                              paymentTo,
                              paymentFrom,
                              currency
                            }) => {
  const {classes} = useStyles();

  return (
    <Flex className={classes.card}
          w={"100%"}
          mih={"137px"}
          direction={"column"}
          gap={"12px"}
          align={"start"}
    >
      <Header profession={profession}/>
      <Content firmName={firmName}
               townTitle={townTitle}
               workType={workType}
               paymentTo={paymentTo}
               paymentFrom={paymentFrom}
               currency={currency}
      />
    </Flex>
  );
};