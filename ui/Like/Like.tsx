import clsx from "clsx";
import React, { FC } from "react";

import styles from "./Like.module.scss";
import { LikeProps } from "./Like.props";
import LikeIcon from "./like.svg";

export const Like: FC<LikeProps> = ({ count, className, ...props }) => {
  return (
    <div className={clsx(styles.like, className)} {...props}>
      {count}
      <LikeIcon className={styles.icon} />
    </div>
  );
};
