import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ArticleСardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  category: string;
  description: string;
  href: string;
  img: string;
  likeCount: number;
  publicationTime: string;
  readingTime: string;
  title: string;
}
