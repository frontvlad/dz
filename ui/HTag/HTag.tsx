import clsx from "clsx";
import React, { FC } from "react";
import styles from "./HTag.module.scss";
import { HTagProps } from "./HTag.props";

export const HTag: FC<HTagProps> = ({
  tag = "h1",
  children,
  className,
  ...props
}) => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={clsx(styles.h, styles.h1, className)} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={clsx(styles.h, styles.h2, className)}>{children}</h2>
      );
    case "h3":
      return (
        <h3 className={clsx(styles.h, styles.h3, className)}>{children}</h3>
      );
    default:
      return <></>;
  }
};
