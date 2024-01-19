import styled from "@emotion/styled";

export const Text = styled.p`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
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
