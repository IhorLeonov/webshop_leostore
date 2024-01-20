import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 373px;

  gap: 20px;
  justify-content: start;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 814px) {
    width: 766px;
  }

  @media (min-width: 1207px) {
    width: 1159px;
  }
`;
