import { Button as MuiButton, ButtonProps } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

interface AddButtonProps extends ButtonProps {
  option: "add" | "plus" | "minus" | "back" | "button";
  children?: React.ReactNode | string;
  ariaLabel?: string;
}

export const Button = ({ option, ariaLabel, children, ...props }: AddButtonProps) => {
  switch (option) {
    case "button":
      return (
        <MuiButton variant="contained" aria-label={ariaLabel} {...props}>
          {children}
        </MuiButton>
      );
    case "add":
      return (
        <MuiButton variant="contained" aria-label="add" {...props}>
          <AddIcon />
        </MuiButton>
      );
    case "plus":
      return (
        <MuiButton
          variant="outlined"
          aria-label="plus"
          sx={{ minWidth: 0, width: 32, height: 32 }}
          {...props}
        >
          <AddIcon />
        </MuiButton>
      );
    case "minus":
      return (
        <MuiButton
          variant="outlined"
          aria-label="minus"
          sx={{ minWidth: 0, width: 32, height: 32 }}
          {...props}
        >
          <RemoveIcon />
        </MuiButton>
      );
    case "back":
      return (
        <MuiButton
          variant="text"
          aria-label="back"
          sx={{ paddingRight: "20px", width: "100%" }}
        >
          <KeyboardArrowLeftIcon />
          Back
        </MuiButton>
      );

    default:
      return <></>;
  }
};
