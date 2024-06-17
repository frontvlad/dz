import { Metadata } from "next";

import { ArticleCard } from "@/components";
import { mockData } from "@/mock/mock";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.list}>
        {mockData.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </main>
  );
}
