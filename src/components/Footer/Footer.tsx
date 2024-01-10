import { FooterProps } from "./Footer.props";
import { FooterSection } from "./Footer.styled";

export const Footer = ({ ...props }: FooterProps) => {
  return (
    <FooterSection {...props}>
      <p>leostore.</p>
      <p style={{ fontWeight: 300 }}>© all rights reserved</p>
    </FooterSection>
  );
};
