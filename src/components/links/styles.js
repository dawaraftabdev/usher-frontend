import styled, { css } from 'styled-components'

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  ${({ isBottom }) =>
    isBottom &&
    css`
      color: white;
    `}
`
export const LinkItem = styled.li`
  font-family: Gilroy-Bold;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 32px;
  }
`
