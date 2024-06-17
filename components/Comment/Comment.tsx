import clsx from "clsx";
import React, { FC } from "react";

import { P, Tag } from "@/ui";

import styles from "./Comment.module.scss";
import { CommentProps } from "./Comment.props";

export const Comment: FC<CommentProps> = ({
  name,
  email,
  children,
  className,
  ...props
}) => {
  return (
    <div className={clsx(styles.card, className)} {...props}>
      <div className={styles.userWrapper}>
        <Tag type="bold">{name}</Tag>
        <Tag type="light">{email}</Tag>
      </div>
      <P className={styles.comment} size="m">
        {children}
      </P>
    </div>
  );
};
