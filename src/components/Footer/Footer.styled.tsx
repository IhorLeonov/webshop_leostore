import styled from "@emotion/styled";

export const FooterSection = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 40px;
  height: 40px;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;
