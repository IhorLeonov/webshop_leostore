import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FooterSection, Text } from "./Footer.styled";

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({ ...props }: FooterProps) => {
  return (
    <FooterSection {...props}>
      <p>leostore.</p>
      <Text>© all rights reserved</Text>
    </FooterSection>
  );
};
