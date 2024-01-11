import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./SearchField.styled";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectData } from "../../redux/selectors";
import { Product } from "../../types/interfaces";
import { setFiltredProducts } from "../../redux/mainSlice";

export const SearchField = () => {
  const { products } = useAppSelector(selectData);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      const value = e.target.value.trim();

      const filtredProducts = products.filter((item: Product) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(setFiltredProducts(filtredProducts));
    }, 1000);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
      />
    </Search>
  );
};
