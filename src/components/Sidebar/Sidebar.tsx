import { Divider, Typography, IconButton } from "@mui/material";
import { List, ListItem } from "@mui/material";
import { MuiDrawer, DrawerHeader, ListItemButton } from "./Sidebar.styled";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useAppDispatch } from "../../redux/hooks";
import { getAllProducts, getProductsInCategory } from "../../redux/operations";
import { setPage } from "../../redux/mainSlice";

interface SidebarProps {
  open: boolean;
  toggleOpenDrawer: (value: boolean) => void;
  categories: string[];
}

export const Sidebar = ({ open, categories, toggleOpenDrawer }: SidebarProps) => {
  const dispatch = useAppDispatch();

  const handleClickCategory = (category: string) => {
    dispatch(setPage(1));
    dispatch(getProductsInCategory({ category }));
    toggleOpenDrawer(false);
  };

  const handleClickAllCategories = () => {
    dispatch(setPage(1));
    dispatch(getAllProducts());
    toggleOpenDrawer(false);
  };

  return (
    <MuiDrawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={() => toggleOpenDrawer(false)}
    >
      <DrawerHeader>
        <Typography sx={{ fontWeight: 500 }}>CATEGORIES</Typography>
        <IconButton onClick={() => toggleOpenDrawer(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List>
        <ListItemButton onClick={handleClickAllCategories}>ALL CATEGORIES</ListItemButton>
        {categories.map((value) => (
          <ListItem key={value} disablePadding>
            <ListItemButton onClick={() => handleClickCategory(value)}>
              {value.toUpperCase()}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
};
