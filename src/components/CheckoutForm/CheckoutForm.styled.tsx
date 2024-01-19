import styled from "@emotion/styled";
// import { Form, Field } from "formik";
import { Button } from "..";

export const Form = styled.form`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    gap: 0 20px;

    width: 680px;
  }
`;

export const Field = styled.input`
  padding: 0 10px;
  margin-bottom: 4px;

  width: 100%;
  height: 40px;

  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.gray};
  transition: ${({ theme }) => theme.transitions.easing.easeInOut};
  background-color: transparent;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }

  @media (min-width: 800px) {
    width: 330px;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 4px;
`;

export const ErrorText = styled.p`
  margin-bottom: 6px;
  margin-left: 10px;
  height: 14px;

  color: ${({ theme }) => theme.colors.red};
  font-size: 12px;
  line-height: 14px;
`;

export const StyledButton = styled(Button)`
  width: 100%;

  @media (min-width: 800px) {
    width: 330px;
    height: 40px;
  }
`;
