import styled, { css } from 'styled-components'
export const Text = styled.div`
  font-family: Gilroy-Medium;
  font-size: 12px;
  line-height: 18px;
  width: 480px;
  ${({ isBottom }) =>
    isBottom &&
    css`
      color: white;
    `}
`
