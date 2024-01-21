import { Wrapper, Text } from "./NotFound.styled";
import SearchIcon from "@mui/icons-material/Search";

const NotFound = () => {
  return (
    <Wrapper>
      <SearchIcon sx={{ width: 180, height: 180 }} />
      <div>
        <Text>OOOPS!</Text>
        <Text>No results found</Text>
      </div>
    </Wrapper>
  );
};

export default NotFound;
