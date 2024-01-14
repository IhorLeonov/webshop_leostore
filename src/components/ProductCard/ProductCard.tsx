import { Title } from "../index";
import { Product } from "../../types/interfaces";
import { Card, Image, Category } from "./ProductCard.styled";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link, useLocation } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, image, category, price } = product;
  const location = useLocation();

  return (
    <Card>
      <Link to={`/product/${id}`} state={{ from: location }}>
        <Image src={image} alt={title} loading="lazy" />
        <Title tag="h3">{title}</Title>
      </Link>
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
