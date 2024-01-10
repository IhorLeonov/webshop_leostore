import styled from "@emotion/styled";

export const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 40px;
  height: 120px;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;
