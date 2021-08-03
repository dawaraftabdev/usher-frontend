import styled, { css } from 'styled-components'
import { IMAGES } from '../../images'
export const MainBody = styled.div`
  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
        background-image: url('${IMAGES[backgroundImage]}');
        background-repeat: no-repeat;
        background-position: 100% 0;
    `}
`
