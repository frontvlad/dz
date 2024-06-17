import { Metadata } from "next";

import { ArticleCard, LikeButton } from "@/components";
import { mockData } from "@/mock/mock";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Home() {
  return (
    <main>
      <ArticleCard {...mockData} />
      <LikeButton isActive />
    </main>
  );
}
