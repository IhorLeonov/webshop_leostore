import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getSingleProduct } from "../../redux/operations";
import { selectData } from "../../redux/selectors";
import { Button, NavLink, Title, Wrapper } from "../../components";
import {
  Card,
  Image,
  Category,
  ProductDesc,
  Price,
  Rate,
  Caption,
} from "./Product.styled";

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
            <Button product={product} option="add-wide" sx={{ width: 120, mt: "12px" }} />
          </ProductDesc>
        </Card>
      </>
    </Wrapper>
  );
};

export default Product;
