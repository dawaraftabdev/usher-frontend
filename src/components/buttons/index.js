import React from 'react'
import { StyledButton } from './styles'

const ButtonsComponent = props => {
  return <StyledButton {...props}>{props.text}</StyledButton>
}

export default ButtonsComponent
