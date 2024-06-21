import clsx from "clsx";
import Image from "next/image";
import React, { FC } from "react";

import { HTag, Like, Link, P, Tag } from "@/ui";

import styles from "./ArticleCard.module.scss";
import { ArticleСardProps } from "./ArticleСard.props";

export const ArticleCard: FC<ArticleСardProps> = ({
  category,
  description,
  img,
  likeCount,
  publicationTime,
  readingTime,
  title,
  className,
  href,
  ...props
}) => {
  return (
    <div className={clsx(styles.card, className)} {...props}>
      <div className={styles.img}>
        <Image alt="article preview" fill objectFit="contain" src={img} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Tag>{category}</Tag>
          <Tag type="light">{publicationTime}</Tag>
          <Like className={styles.like} count={likeCount} />
        </div>
        <HTag className={styles.title} tag="h3">
          {title}
        </HTag>
        <P className={styles.description} size="s">
          {description}
        </P>
        <div className={styles.footer}>
          <Tag type="light">{readingTime}</Tag>
          <Link href={href}>Читать</Link>
        </div>
      </div>
    </div>
  );
};
