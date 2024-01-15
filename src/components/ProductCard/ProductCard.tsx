import { Button, Title } from "../index";
import { Product } from "../../types/interfaces";
import { Card, Image, Category } from "./ProductCard.styled";
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
        product={product}
        option="add-small"
        sx={{ position: "absolute", top: 12 }}
      />
    </Card>
  );
};
