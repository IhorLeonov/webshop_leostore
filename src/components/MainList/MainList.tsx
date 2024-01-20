import { ProductCard } from "..";
import { Product } from "../../types/interfaces";
import { List } from "./MainList.styled";

interface MainListProps {
  products: Product[];
}

export const MainList = ({ products }: MainListProps) => {
  return (
    <List>
      {products.map(({ id, ...props }: Product) => (
        <li key={id}>
          <ProductCard product={{ id, ...props }} />
        </li>
      ))}
    </List>
  );
};
