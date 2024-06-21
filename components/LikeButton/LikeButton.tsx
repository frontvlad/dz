import clsx from "clsx";
import React, { FC } from "react";

import LikeIcon from "./like.svg";
import styles from "./LikeButton.module.scss";
import { LikeButtonProps } from "./LikeButton.props";

export const LikeButton: FC<LikeButtonProps> = ({
  isActive = false,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx({ [styles.active]: isActive }, styles.button, className)}
      {...props}
    >
      <LikeIcon className={styles.icon} />
    </button>
  );
};