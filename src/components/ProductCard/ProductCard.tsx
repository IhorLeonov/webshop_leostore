import { Button, Title } from "../index";
import { Product } from "../../types/interfaces";
import { Card, Image, Category } from "./ProductCard.styled";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/cartSlice";
import { setMessage } from "../../redux/mainSlice";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, image, category, price } = product;
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (product) {
      dispatch(addToCart(product));
      dispatch(setMessage(`Item successfully added to cart!`));
    }
  };

  return (
    <Card>
      <Link to={`/product/${id}`} state={{ from: location }}>
        <Image src={image} alt={title} loading="lazy" />
        <Title tag="h3">{title}</Title>
      </Link>
      <Category>{category}</Category>
      <p>{price} $</p>
      <Button
        option="add"
        onClick={() => handleClick()}
        sx={{ position: "absolute", top: 12 }}
      />
    </Card>
  );
};
