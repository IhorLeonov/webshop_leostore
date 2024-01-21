import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-height: calc(100vh - 100px);

  @media (min-width: 600px) {
    min-height: calc(100vh - 165px);
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 32px;
`;
