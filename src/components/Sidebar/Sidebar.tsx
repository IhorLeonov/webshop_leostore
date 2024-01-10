import { SidebarProps } from "./Sidebar.props";
import { SidebarSection } from "./Sidebar.styled";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return <SidebarSection {...props}>Sidebar</SidebarSection>;
};
