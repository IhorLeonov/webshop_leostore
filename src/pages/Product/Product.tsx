import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getSingleProduct } from "../../redux/operations";
import { selectData } from "../../redux/selectors";
import { Button, NavLink, Title, Container } from "../../components";
import { addToCart } from "../../redux/cartSlice";
import {
  Card,
  Image,
  Category,
  ProductDesc,
  Price,
  Rate,
  Caption,
} from "./Product.styled";
import { setMessage } from "../../redux/mainSlice";

const Product = () => {
  const { id } = useParams();
  const { product } = useAppSelector(selectData);

  const location = useLocation();
  const dispatch = useAppDispatch();
  const backLinkHref = location.state?.from ?? "/";

  const handleClick = () => {
    if (product) {
      dispatch(addToCart(product));
      dispatch(setMessage("Item successfully added to cart!"));
    }
  };

  useEffect(() => {
    if (id) dispatch(getSingleProduct({ productId: id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <NavLink to={backLinkHref} style={{ padding: 0, width: 100 }}>
        <Button option="back" />
      </NavLink>
      <Card>
        <Image src={product?.image} alt={product?.title} loading="lazy" />
        <ProductDesc>
          <Title tag="h2">{product?.title}</Title>
          <Category>{product?.category}</Category>
          <Rate>
            Rate <span>{product?.rating.rate}/5</span>
          </Rate>
          <Price>{product?.price} $</Price>
          <Caption>{product?.description}</Caption>
          <Button
            option="button"
            ariaLabel="buy"
            onClick={handleClick}
            sx={{ width: 120, mt: "12px" }}
          >
            Buy
          </Button>
        </ProductDesc>
      </Card>
    </Container>
  );
};

export default Product;
