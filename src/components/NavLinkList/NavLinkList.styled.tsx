import styled from "@emotion/styled";

export const LinkList = styled.ul`
  display: flex;
`;

export const IconWrapper = styled.div`
  svg {
    width: 24px;
    height: 24px;

    @media (min-width: 600px) {
      width: 28px;
      height: 28px;
    }

    transition: ${({ theme }) => theme.transitions.easing.easeInOut};

    &:hover,
    &:focus {
      transform: scale(1.2);
    }
  }
`;
