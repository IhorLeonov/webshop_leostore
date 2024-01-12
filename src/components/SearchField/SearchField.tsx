import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchField.styled";

interface SearchFieldProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchField = ({ handleChange }: SearchFieldProps) => {
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
