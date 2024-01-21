import styled from "@emotion/styled";

export const Text = styled.p`
  font-weight: 500;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;
  max-width: 700px;

  margin-left: auto;
  margin-right: auto;
`;

export const EmptyCart = styled.div`
  min-height: calc(100vh - 136px);

  @media (min-width: 600px) {
    min-height: calc(100vh - 200px);
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.p`
  font-size: 32px;
`;
