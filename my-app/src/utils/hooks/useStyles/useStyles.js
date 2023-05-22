import React from 'react';

import {createStyles} from "@mantine/core";

export const useStyles = createStyles(({colors}) => ({
  //TODO clean it
  button: {
    height: "40px",
    fontSize: "14px",
    color: colors.white,
    borderRadius: "8px",
    backgroundColor: colors.blue500,
    '&:hover': {
      backgroundColor: colors.blue300,
    },
    '&:active': {
      backgroundColor: colors.blue600,
    },
  },
  smallButton: {
    height: "32px",
  },
  lightButton: {
    color: colors.blue600,
    backgroundColor: colors.blue100,
    '&:hover': {
      backgroundColor: colors.blue200,
    },
    '&:active': {
      backgroundColor: colors.blue300,
    },
  },
  textButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14px",
    color: colors.grey500,
    stroke: colors.grey500,
    '&:hover': {
      color: colors.blue400,
      stroke: colors.blue400
    },
    '&:active': {
      color: colors.blue500,
      stroke: colors.blue500
    },
    cursor: "pointer"
  },
  card: {
    padding: "24px",
    border: `1px solid`,
    borderColor: colors.grey200,
    borderRadius: "12px",
    backgroundColor: colors.white
  },
  clickableIcon: {
    stroke: colors.grey500,
    fill: "none",
    '&:hover': {
      stroke: colors.blue500,
    },
    '&:active': {
      stroke: colors.blue500,
      fill: colors.blue500,
    },
  }
}))
