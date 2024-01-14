import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { Container } from "./Container.styled";

interface ContainerProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: JSX.Element;
}

export const Wrapper = ({ children, ...props }: ContainerProps) => {
  return <Container {...props}>{children}</Container>;
};
