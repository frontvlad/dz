import { ArticleCard, LikeButton } from "@/components";
import { mockData } from "@/mock/mock";

export default function Home() {
  return (
    <main>
      <ArticleCard {...mockData} />
      <LikeButton isActive />
    </main>
  );
}
