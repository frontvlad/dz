import { Metadata } from "next";
import Image from "next/image";

import { Comment, LikeButton } from "@/components";
import { mockComments } from "@/mock/mock";
import { Button, HTag, Like, P, Tag } from "@/ui";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Article",
};

export default function Home() {
  return (
    <main className={styles.page}>
      <HTag tag="h1">Как работать с CSS Grid</HTag>
      <div className={styles.infoWrapper}>
        <Tag type="normal">Front-end</Tag>
        <Tag type="light">1 месяц назад</Tag>
        <Tag type="light">3 минуты</Tag>
        <Like count={7}></Like>
      </div>
      <div className={styles.img}>
        <Image
          alt="article preview"
          fill
          objectFit="contain"
          src={"/article-img.png"}
        />
      </div>
      <div className={styles.wrapper}>
        <P size="l">
          Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему
          сеток в CSS. Гриды подойдут и для верстки основных областей страницы,
          и небольших элементов пользовательского интерфейса. Эта статья даёт
          общее представление о грид-раскладке и новой терминологии, которая
          является частью спецификации CSS Grid Layout Level 1. Более подробно
          показанные возможности будут описаны описаны далее в руководстве.
        </P>
      </div>
      <div className={styles.wrapper}>
        <HTag tag="h2">Что такое грид?</HTag>
        <P size="l">
          Грид представляет собой пересекающийся набор горизонтальных и
          вертикальных линий, образующих колонки и строки. Элементы могут быть
          помещены в грид в пределах линий этих колонок и строк. Грид имеет
          следующие особенности:
        </P>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.likeWrapper}>
          <P size="m">Понравилось? Жми</P>
          <LikeButton isActive />
        </div>
      </div>
      <div className={styles.wrapper}>
        <HTag tag="h2">Комментарии</HTag>
        <div className={styles.commentList}>
          {mockComments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                email={comment.email}
                name={comment.name}
              >
                {comment.comment}
              </Comment>
            );
          })}
        </div>
      </div>

      <Button className={styles.button}>Отправить</Button>
    </main>
  );
}
