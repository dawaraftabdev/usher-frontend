import React from 'react'
import { StyledRadio } from './styles'

const RadioComponent = props => {
  return <StyledRadio {...props}>{props && props.text}</StyledRadio>
}

export default RadioComponent
