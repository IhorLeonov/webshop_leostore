import { AppBar as MuiAppBar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledToolbar } from "./AppBar.styled";
import { useTheme } from "@emotion/react";

interface SearchAppBarProps {
  toggleOpenDrawer: (value: boolean) => void;
  children?: JSX.Element;
}

export function AppBar({ toggleOpenDrawer, children }: SearchAppBarProps) {
  const theme = useTheme();
  return (
    <MuiAppBar position="static" sx={{ backgroundColor: theme.palette.primary.light }}>
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
          sx={{ flexGrow: 1, fontSize: 18, display: { xs: "none", sm: "block" } }}
        >
          Shop now!
        </Typography>
        {children}
      </StyledToolbar>
    </MuiAppBar>
  );
}
