import { Button } from "../index";
import { Product } from "../../types/interfaces";
import { Card, Image, Category } from "./ProductCard.styled";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/cartSlice";
import { setMessage, setPage } from "../../redux/mainSlice";
import { getProductsInCategory } from "../../redux/operations";
import { Title } from "../../UI";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, image, category, price } = product;
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleAddClick = () => {
    if (product) {
      dispatch(addToCart(product));
      dispatch(setMessage(`Item successfully added to cart!`));
    }
  };

  const handleCategoryClick = () => {
    dispatch(setPage(1));
    dispatch(getProductsInCategory({ category }));
    window.scroll({
      top: 0,
    });
  };

  return (
    <Card>
      <Link to={`/product/${id}`} aria-label="to product" state={{ from: location }}>
        <Image src={image} alt="item photo" loading="lazy" />
        <Title tag="h2">{title}</Title>
      </Link>
      <Category onClick={handleCategoryClick}>{category}</Category>
      <p>{price.toFixed(2)} $</p>
      <Button
        option="add"
        onClick={() => handleAddClick()}
        sx={{ position: "absolute", top: 12 }}
      />
    </Card>
  );
};
