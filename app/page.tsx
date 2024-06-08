import { useEffect } from "react";

import { ArticleCard } from "@/components";
import { mockData } from "@/mock/mock";

import styles from "./page.module.scss";

export default function Home() {
  useEffect

  return (
    <main className={styles.main}>
      <ArticleCard {...mockData} />
    </main>
  );
}
