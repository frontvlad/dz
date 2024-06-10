import clsx from "clsx";
import React, { FC } from "react";

import styles from "./P.module.scss";
import { PProps } from "./P.props";

export const P: FC<PProps> = ({
  size = "m",
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={clsx(
        { [styles.s]: size == "s" },
        { [styles.m]: size == "m" },
        { [styles.l]: size == "l" },
        styles.p,
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
