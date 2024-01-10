import { useEffect } from "react";
import { ProductList } from "../../components/index";
import { useAppDispatch } from "../../redux/hooks";
import { getAllProducts } from "../../redux/operations";

// interface MainProps {}

const Main = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ProductList />
    </div>
  );
};

export default Main;
