import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 10px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  padding: 12px;
  width: calc(100vw - 80px);
  height: 360px;
  object-fit: contain;

  @media (min-width: 1200px) {
    height: 500px;
    width: 550px;
  }
`;

export const ProductDesc = styled.div`
  @media (min-width: 1200px) {
    width: 550px;
  }
`;

export const Category = styled.p`
  margin-top: 8px;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.hover};
  }
`;

export const Price = styled.p`
  margin-top: 12px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.8px;
`;

export const Rate = styled.p`
  margin-top: 8px;

  span {
    font-weight: 500;
  }
`;

export const Caption = styled.div`
  margin-top: 8px;
`;
