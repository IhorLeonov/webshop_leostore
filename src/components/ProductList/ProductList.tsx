import { ProductCard } from "..";
import { Product } from "../../types/interfaces";
import { List } from "./ProductList.styled";

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      <List>
        {products.map(({ id, ...props }: Product) => (
          <li key={id}>
            <ProductCard product={{ id, ...props }} />
          </li>
        ))}
      </List>
    </>
  );
};
