import clsx from "clsx";
import React, { FC } from "react";

import styles from "./Tag.module.scss";
import { TagProps } from "./Tag.props";

export const Tag: FC<TagProps> = ({
  type = "normal",
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        styles.tag,
        className,
        { [styles.normal]: type == "normal" },
        { [styles.light]: type == "light" },
        { [styles.bold]: type == "bold" }
      )}
      {...props}
    >
      {children}
    </div>
  );
};
