import styled from "@emotion/styled";

export const Card = styled.div`
  position: relative;
  padding: 12px;
  width: 373px;

  white-space: nowrap;
  background-color: #fff;
  overflow: hidden;

  h2 {
    margin-top: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    margin-top: 10px;
    text-transform: capitalize;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 220px;
  margin-left: auto;
  margin-right: auto;

  object-fit: contain;
`;

export const Category = styled.p`
  font-weight: 500;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.hover};
  }
`;
