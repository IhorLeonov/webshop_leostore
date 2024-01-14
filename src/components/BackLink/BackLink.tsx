import { NavLink } from "../index";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

interface BackLinkProps {
  path: string;
}

export const BackLink = ({ path }: BackLinkProps) => {
  return (
    <NavLink to={path} style={{ padding: 0, width: 100 }}>
      <Button variant="text" aria-label="go back" sx={{ paddingLeft: 0, width: "100%" }}>
        <KeyboardArrowLeftIcon />
        Back
      </Button>
    </NavLink>
  );
};
