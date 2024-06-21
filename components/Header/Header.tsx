import clsx from "clsx";
import React, { FC } from "react";

import { HTag } from "@/ui";

import GitHubIcon from "./github.svg";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.props";

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header className={clsx(styles.header, className)} {...props}>
      <HTag className={styles.title} tag="h1">
        .my_blog
      </HTag>
      <a className={styles.link} href="https://github.com/frontvlad" target="_blank">
        <GitHubIcon />
      </a>
    </header>
  );
};
