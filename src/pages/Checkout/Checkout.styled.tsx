import styled from "@emotion/styled";

export const Text = styled.p`
  font-weight: 500;
`;

export const Box = styled.div`
  @media (max-width: 799px) {
    margin-top: 20px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;

  margin-left: auto;
  margin-right: auto;
`;
