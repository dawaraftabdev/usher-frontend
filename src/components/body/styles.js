import styled, { css } from "styled-components";
import { IMAGES } from "../../images";
export const MainBody = styled.div`
  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url("${IMAGES[backgroundImage]}");
      background-repeat: no-repeat;
      background-position: 100% 0;
    `}
  max-width: 675px;
  margin: 50px auto 0;
`

export const BodyColumn = styled.div``
