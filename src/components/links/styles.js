import styled, { css } from 'styled-components'
import { Link } from '@theguarantors/ui-kit-v3/dist/design-system'

export const LinkList = styled(Link).attrs({
  as: 'ul'
})`
  list-style: none;
  display: flex;
  align-items: center;
  color: ${({ isBottom }) =>
    isBottom ? 'var(--color-text-white)' : 'var(--color-emphasis-high)'};
`
export const LinkItem = styled(Link).attrs({
  as: 'li'
})`
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 32px;
  }
`
