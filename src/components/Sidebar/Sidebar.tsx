import { Divider, Typography, IconButton } from "@mui/material";
import { MuiDrawer, DrawerHeader } from "./Sidebar.styled";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface SidebarProps {
  open: boolean;
  toggleOpenDrawer: (value: boolean) => void;
  children?: JSX.Element;
}

export const Sidebar = ({ open, toggleOpenDrawer, children }: SidebarProps) => {
  return (
    <MuiDrawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={() => toggleOpenDrawer(false)}
    >
      <DrawerHeader>
        <Typography sx={{ fontWeight: 500 }}>Choose category</Typography>
        <IconButton onClick={() => toggleOpenDrawer(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      {children}
    </MuiDrawer>
  );
};
