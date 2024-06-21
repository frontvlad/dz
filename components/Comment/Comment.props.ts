import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CommentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  email: string;
  children: ReactNode;
}
