import styled from "@emotion/styled";
import { Drawer, ListItemButton as Button } from "@mui/material";

export const MuiDrawer = styled(Drawer)`
  position: "static";
  width: 240px;

  & .MuiDrawer-paper {
    width: 240px;
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 8px;
  padding-left: 38px;

  min-height: 56px;
`;

export const ListItemButton = styled(Button)`
  padding: 20px 38px;
  text-transform: capitalize;
`;
