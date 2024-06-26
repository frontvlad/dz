import clsx from "clsx";
import React, { FC } from "react";

import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
