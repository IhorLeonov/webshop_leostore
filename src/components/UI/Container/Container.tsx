import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { ContainerCmp } from "./Container.styled";

interface ContainerProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Container = ({ ...props }: ContainerProps) => {
  return <ContainerCmp {...props}></ContainerCmp>;
};
