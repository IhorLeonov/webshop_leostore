import styled from "@emotion/styled";
import { Toolbar } from "@mui/material";

export const StyledToolbar = styled(Toolbar)`
  @media (min-width: 600px) {
    min-height: 48px;
  }

  @media (min-width: 1250px) {
    padding-left: 0;
    padding-right: 0;

    margin-left: calc((100vw - 1160px) / 2);
    margin-right: calc((100vw - 1160px) / 2);
  }
`;
