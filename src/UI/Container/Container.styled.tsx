import styled from "@emotion/styled";

export const ContainerCmp = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding: 20px 16px;
  max-width: 1160px;
  min-height: calc(100vh - 60px);

  @media (min-width: 600px) {
    padding: 40px 24px;
    min-height: calc(100vh - 85px);
  }

  @media (min-width: 1250px) {
    padding: 40px 0px;
  }
`;
