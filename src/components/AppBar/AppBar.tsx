import { AppBar, Box, IconButton, Typography, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SearchField } from "../SearchField/SearchField";

interface SearchAppBarProps {
  handleDrawerOpen: () => void;
}

export function SearchAppBar({ handleDrawerOpen }: SearchAppBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
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
          <SearchField />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
