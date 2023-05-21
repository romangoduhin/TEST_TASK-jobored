import React from 'react';
import {Button as MantineButton} from "@mantine/core";
import {useStyles} from "@hooks";

export const Button = ({
                         onClick,
                         size = "sm",
                         children,
                         className,
                         ...attrs
                       }) => {
  const {classes, cx} = useStyles();

  const style = className ? className : cx(classes.button, {[classes.smallButton]: size === "sm"})

  return (
    <MantineButton className={style}
                   onClick={onClick}
                   {...attrs}
    >
      {children}
    </MantineButton>
  );
};