import styled from "@emotion/styled";

export const Container = styled.div`
  min-height: calc(100vh - 60px);
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 600px) {
    min-height: calc(100vh - 85px);
  }
`;
