import React from 'react';
import {Text} from "@mantine/core";
import {useStyles} from "@hooks";

export const Salary = ({
                         paymentTo,
                         paymentFrom,
                         currency
                       }) => {
  const {classes} = useStyles();

  const getDiapason = () => {
    if (paymentFrom && paymentTo) {
      return `з/п от ${paymentFrom} - ${paymentTo} ${currency}`
    } else if (paymentTo === paymentFrom) {
      return `з/п ${paymentFrom} ${currency}`
    } else if (paymentFrom && !paymentTo) {
      return `з/п от ${paymentFrom} ${currency}`
    } else {
      return `З/п не указана`
    }
  }
  return (
    <Text className={classes.text} fw={"600"}>
      {getDiapason()}
    </Text>
  );
};