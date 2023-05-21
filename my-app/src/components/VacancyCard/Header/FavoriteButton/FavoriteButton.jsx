import React from 'react';
import {Star} from "@icons";
import {ActionIcon} from "@mantine/core";
import {useStyles} from "@hooks";

export const FavoriteButton = ({onClick}) => {
  const {classes} = useStyles();

  return (
    <ActionIcon className={classes.clickableIcon} variant="transparent">
      <Star onClick={onClick} alt={"favorite_icon"}
      />
    </ActionIcon>
  );
};