import styled from "@emotion/styled";

export const Large = styled.h1`
  font-family: "Kanit Regular", sans-serif;
  font-size: 28px;

  @media (min-width: 600px) {
    font-size: 42px;
    font-weight: 700;
  }
`;

export const Medium = styled.h2`
  font-family: "Kanit Medium", sans-serif;
  font-size: 20px;

  @media (min-width: 600px) {
    font-size: 24px;
  }
`;

export const Small = styled.h3`
  font-size: 16px;
`;
