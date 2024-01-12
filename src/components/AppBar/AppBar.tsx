import { AppBar as MuiAppBar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledToolbar } from "./AppBar.styled";

interface SearchAppBarProps {
  toggleOpenDrawer: (value: boolean) => void;
  children?: JSX.Element;
}

export function AppBar({ toggleOpenDrawer, children }: SearchAppBarProps) {
  return (
    <MuiAppBar position="static">
      <StyledToolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => toggleOpenDrawer(true)}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Shop now!
        </Typography>
        {children}
      </StyledToolbar>
    </MuiAppBar>
  );
}
