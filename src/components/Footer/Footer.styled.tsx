import styled from "@emotion/styled";

export const FooterSection = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
  height: 60px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
`;
