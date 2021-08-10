import React from 'react'
import { StyledHeader, StyledSubHeader } from './styles'

const HeadingComponent = props => {
  if (props.isSub) {
    return <StyledSubHeader {...props}>{props && props.value}</StyledSubHeader>
  }
  return <StyledHeader {...props}>{props && props.value}</StyledHeader>
}
export default HeadingComponent
