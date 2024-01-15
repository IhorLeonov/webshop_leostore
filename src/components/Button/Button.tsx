import { Button as MuiButton, ButtonProps } from "@mui/material";
import { Product } from "../../types/interfaces";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/mainSlice";

import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

interface AddButtonProps extends ButtonProps {
  product?: Product | null;
  option: "add-small" | "add-wide" | "back";
}

export const Button = ({ option, product, ...props }: AddButtonProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    product && dispatch(addToCart(product));
  };

  switch (option) {
    case "add-small":
      return (
        <MuiButton
          variant="contained"
          aria-label="add to cart"
          onClick={handleClick}
          size="small"
          {...props}
        >
          <AddIcon />
        </MuiButton>
      );
    case "add-wide":
      return (
        <MuiButton
          variant="contained"
          aria-label="add to cart"
          onClick={handleClick}
          {...props}
        >
          Buy
        </MuiButton>
      );
    case "back":
      return (
        <MuiButton
          variant="text"
          aria-label="go back"
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
