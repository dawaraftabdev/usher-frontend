import styled, { css } from 'styled-components'
export const Heading = styled.h1`
  ${({ isSub }) =>
    isSub
      ? css`
          font-family: Gilroy-Medium;
          font-size: 16px;
          line-height: 24px;
        `
      : css`
          font-family: Tiempos Headline;
          font-style: normal;
          font-weight: 900;
          font-size: 40px;
          line-height: 50px;
        `}
`
