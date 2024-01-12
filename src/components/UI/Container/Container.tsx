import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Box } from "./Container.styled";

export interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Container = ({ ...props }: ContainerProps) => {
  return <Box {...props}></Box>;
};
