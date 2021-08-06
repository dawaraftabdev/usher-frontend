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
  ${({ styles }) =>
    styles &&
    css`
      font-family: ${styles.fontFamily};
      font-size: ${styles.fontSize};
      font-weight: ${styles.fontWeight};
      line-height: ${styles.lineHeight};
      color: ${styles.color};
      margin: ${styles.margin};
    `}
`
