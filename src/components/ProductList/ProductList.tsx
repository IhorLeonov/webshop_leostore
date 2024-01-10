import { ProductCard } from "..";
import { useAppSelector } from "../../redux/hooks";
import { selectData } from "../../redux/selectors";
import { Product } from "../../types/interfaces";
import { List } from "./ProductList.styled";

export const ProductList = () => {
  const { products } = useAppSelector(selectData);
  const productList = products.slice(0, 6);

  return (
    <List>
      {productList.map(({ id, ...props }: Product) => (
        <li key={id}>
          <ProductCard product={{ id, ...props }} />
        </li>
      ))}
    </List>
  );
};
