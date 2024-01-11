import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 40px;
  height: 90px;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

export const LogoLink = styled(Link)`
  margin-left: calc(100vw / 2 - 40px);
  transform: translateX(-50%);
`;

export const CartLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;
