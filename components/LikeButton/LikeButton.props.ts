import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface LikeButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive?: boolean;
}