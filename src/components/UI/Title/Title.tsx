import { Large, Medium, Small } from "./Title.styled";

interface TitleProps {
  tag: "h1" | "h2" | "h3";
  children: React.ReactNode;
}

export const Title = ({ tag, children, ...props }: TitleProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <Large {...props}>{children}</Large>;
    case "h2":
      return <Medium {...props}>{children}</Medium>;
    case "h3":
      return <Small {...props}>{children}</Small>;
    default:
      return <></>;
  }
};
