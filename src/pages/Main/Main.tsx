import { useEffect, useState } from "react";
import { Product } from "../../types/interfaces";
import {
  MainList,
  AppBar,
  Sidebar,
  SearchField,
  Container,
  Button,
} from "../../components/index";
import { setFilteredProducts, setNotFound, setPage } from "../../redux/mainSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllCategories, getAllProducts } from "../../redux/operations";
import {
  selectData,
  selectIsLoading,
  selectNotFound,
  selectPage,
} from "../../redux/selectors";
import { Box } from "@mui/material";
import NotFound from "../../components/NotFound/NotFound";

const Main = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);
  const isLoading = useAppSelector(selectIsLoading);
  const nothingFound = useAppSelector(selectNotFound);

  const { products, categories, filteredProducts } = useAppSelector(selectData);

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [slicedProducts, setSlicedProducts] = useState<Product[]>(filteredProducts);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      const value = e.target.value.trim();
      const filteredArr = products.filter((item: Product) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      if (filteredArr.length < 1) {
        dispatch(setNotFound(true));
      } else {
        dispatch(setNotFound(false));
      }
      dispatch(setFilteredProducts(filteredArr));
    }, 700);
  };

  const toggleOpenDrawer = (value: boolean) => {
    setOpenSidebar(value);
  };

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(setFilteredProducts(products));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  useEffect(() => {
    setSlicedProducts(filteredProducts.slice(0, 6 * page));
  }, [filteredProducts, page]);

  const handleLoadMore = () => {
    dispatch(setPage());
  };

  return (
    <>
      <AppBar toggleOpenDrawer={toggleOpenDrawer}>
        <SearchField handleChange={handleChangeSearch} />
      </AppBar>
      <Container>
        <Sidebar
          open={openSidebar}
          categories={categories}
          toggleOpenDrawer={toggleOpenDrawer}
        />
        {nothingFound ? <NotFound /> : <MainList products={slicedProducts} />}

        {!isLoading && filteredProducts.length > 6 * page && !nothingFound && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
            <Button option="button" onClick={handleLoadMore}>
              Load more
            </Button>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Main;
