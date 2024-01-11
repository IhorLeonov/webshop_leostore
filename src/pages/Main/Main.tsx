import { useEffect, useState } from "react";
import { ProductList, SearchAppBar } from "../../components/index";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllProducts } from "../../redux/operations";
import { MainPage } from "./Main.styled";
import { selectData } from "../../redux/selectors";
import { setFiltredProducts } from "../../redux/mainSlice";
import Sidebar from "../../components/Sidebar/Sidebar";

const Main = () => {
  // const productList = products.slice(0, 6);
  const dispatch = useAppDispatch();
  const { products, filtredProducts } = useAppSelector(selectData);
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(setFiltredProducts(products));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <MainPage>
      <SearchAppBar handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <ProductList products={filtredProducts} />
    </MainPage>
  );
};

export default Main;
