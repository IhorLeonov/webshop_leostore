import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";

export const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px;
  height: 60px;

  @media (min-width: 600px) {
    padding: 0 24px;
    height: 85px;
  }

  @media (min-width: 1250px) {
    padding-left: calc((100vw - 1160px) / 2);
    padding-right: calc((100vw - 1180px) / 2);
  }

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Link = styled(RouterLink)`
  @media (min-width: 1250px) {
    margin-left: 555px;
    transform: translateX(-50%);
  }
`;
