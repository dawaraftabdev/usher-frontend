import React from 'react'
import { StyledScrollableArea } from './styles'

const ScrollableAreaComponent = props => {
  return (
    <StyledScrollableArea {...props}>
      {props && props.text}
    </StyledScrollableArea>
  )
}

export default ScrollableAreaComponent
