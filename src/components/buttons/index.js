import React from 'react'
import { Button } from '@theguarantors/ui-kit-v3'
import { StyledButton } from './styles'

const ButtonsComponent = props => {
  return <StyledButton {...props}>{props.text}</StyledButton>
}

export default ButtonsComponent
