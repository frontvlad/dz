import clsx from "clsx";
import React, { FC } from "react";

import styles from "./Link.module.scss";
import { LinkProps } from "./Link.props";
import Arrow from "./arrow.svg";

export const Link: FC<LinkProps> = ({ children, className, ...props }) => {
  return (
    <a className={clsx(styles.link, className)} {...props}>
      {children}
      <Arrow className={styles.icon} />
    </a>
  );
};
