import styled, { css } from 'styled-components'
import { HelperText, Header4 } from '@theguarantors/ui-kit-v3/design-system'

export const StyledHelperText = styled(HelperText)`
  font-size: 1rem !important;
  margin-top: 2rem;
`

export const StyledHeader4 = styled(Header4).attrs({
  as: 'div'
})`
  width: 480px;
  ${({ isBottom }) =>
    isBottom &&
    css`
      color: var(--color-text-white);
    `}
  ${({ styles }) =>
    styles &&
    css`
      margin: ${styles.margin};
    `}
`
