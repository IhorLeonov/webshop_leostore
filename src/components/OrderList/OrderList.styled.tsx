import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  max-width: 700px;

  margin-left: auto;
  margin-right: auto;
`;

export const ListItem = styled.li`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.img`
  padding: 10px;
  min-width: 140px;
  height: 140px;
  width: 140px;

  object-fit: contain;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  width: 100%;

  white-space: nowrap;
  overflow: hidden;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

export const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;

  width: 36px;
  height: 36px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const Text = styled.p`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
`;
