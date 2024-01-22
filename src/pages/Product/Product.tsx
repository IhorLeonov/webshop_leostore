import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getProductsInCategory, getSingleProduct } from "../../redux/operations";
import { selectData } from "../../redux/selectors";
import { Button } from "../../components";
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
import { Title, Container } from "../../UI";

const Product = () => {
  const { id } = useParams();
  const { product } = useAppSelector(selectData);

  const location = useLocation();
  const dispatch = useAppDispatch();
  const backLinkHref = location.state?.from ?? "/";
  const navigate = useNavigate();

  const handleClick = () => {
    if (product) {
      dispatch(addToCart(product));
      dispatch(setMessage("Item successfully added to cart!"));
    }
  };

  const handleCategoryClick = (category: string | undefined) => {
    if (category) {
      navigate("/");
      dispatch(getProductsInCategory({ category }));
    }
  };

  useEffect(() => {
    if (id) dispatch(getSingleProduct({ productId: id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Button option="back" path={backLinkHref} />

      <Card>
        <Image src={product?.image} alt="item photo" loading="lazy" />
        <ProductDesc>
          <Title tag="h2">{product?.title}</Title>
          <Category onClick={() => handleCategoryClick(product?.category)}>
            {product?.category}
          </Category>
          <Rate>
            Rate <span>{product?.rating.rate}/5</span>
          </Rate>
          <Price>{product?.price.toFixed(2)} $</Price>
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
