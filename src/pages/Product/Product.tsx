import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getSingleProduct } from "../../redux/operations";
import { selectData } from "../../redux/selectors";
import {
  Card,
  Image,
  Category,
  ProductDesc,
  Price,
  Rate,
  Caption,
} from "./Product.styled";
import { BackLink, Title, Wrapper } from "../../components";
import { Button } from "@mui/material";

const Product = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { product } = useAppSelector(selectData);
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    if (id) dispatch(getSingleProduct({ productId: id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <>
        <BackLink path={backLinkHref} />
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
              variant="contained"
              aria-label="add to cart"
              sx={{ mt: "12px", width: 120 }}
            >
              Buy
            </Button>
          </ProductDesc>
        </Card>
      </>
    </Wrapper>
  );
};

export default Product;
