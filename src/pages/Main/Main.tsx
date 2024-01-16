import { useEffect, useState } from "react";
import { Product } from "../../types/interfaces";
import {
  ProductList,
  AppBar,
  Sidebar,
  CheckboxList,
  SearchField,
  Container,
} from "../../components/index";
import {
  resetCategories,
  setFilteredCategories,
  setFilteredProducts,
} from "../../redux/mainSlice";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllCategories, getAllProducts } from "../../redux/operations";
import { selectData } from "../../redux/selectors";

const Main = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { products, categories, filteredProducts, filteredCategories } =
    useAppSelector(selectData);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(resetCategories());
    setTimeout(() => {
      const value = e.target.value.trim();

      const filteredProducts = products.filter((item: Product) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(setFilteredProducts(filteredProducts));
    }, 1000);
  };

  const toggleOpenDrawer = (value: boolean) => {
    setOpenSidebar(value);
  };

  const handleChangeCategory = (value: string) => {
    dispatch(setFilteredCategories(value));
  };

  const getFilteredProductsByCategory = (categories: string[]): Product[] => {
    if (categories.length < 1) {
      return products;
    } else {
      const filteredData = categories.flatMap((category) => {
        return products.filter((product) => product.category === category);
      });
      return filteredData.sort((a, b) => a.title.localeCompare(b.title));
    }
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
    dispatch(setFilteredProducts(getFilteredProductsByCategory(filteredCategories)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredCategories]);

  return (
    <>
      <AppBar toggleOpenDrawer={toggleOpenDrawer}>
        <SearchField handleChange={handleChangeSearch} />
      </AppBar>
      <Container>
        <Sidebar open={openSidebar} toggleOpenDrawer={toggleOpenDrawer}>
          <CheckboxList
            valuesArray={categories}
            handleChange={handleChangeCategory}
            checkedInputs={filteredCategories}
          />
        </Sidebar>
        <ProductList products={filteredProducts} />
      </Container>
    </>
  );
};

export default Main;
