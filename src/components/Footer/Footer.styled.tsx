import styled from "@emotion/styled";

export const FooterSection = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px;
  height: 40px;

  @media (min-width: 600px) {
    padding: 0 24px;
    height: 60px;
  }

  @media (min-width: 1250px) {
    padding-left: calc((100vw - 1160px) / 2);
    padding-right: calc((100vw - 1160px) / 2);
  }

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Text = styled.p`
  font-weight: 300px;
`;
