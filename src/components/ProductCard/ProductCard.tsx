import { Title } from "../index";
import { Product } from "../../types/interfaces";
import { Card, Image, Category } from "./ProductCard.styled";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { title, image, category, price } = product;

  return (
    <Card>
      <Image src={image} alt={title} loading="lazy" />
      <Title tag="h3">{title}</Title>
      <Category>{category}</Category>
      <p>{price} $</p>
      <Button
        variant="contained"
        size="small"
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
        }}
        aria-label="add to cart"
      >
        <AddIcon />
      </Button>
    </Card>
  );
};
