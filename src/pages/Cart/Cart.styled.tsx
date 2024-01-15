import styled from "@emotion/styled";

export const CardPage = styled.div`
  padding: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightBlack};
`;

export const Image = styled.img`
  height: 140px;
  width: 140px;
  object-fit: contain;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;

  border-left: 1px solid ${({ theme }) => theme.colors.lightBlack};
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
