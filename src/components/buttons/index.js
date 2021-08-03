import React from 'react'
import { Button } from '@theguarantors/ui-kit-v3'

const ButtonsComponent = props => {
  return <Button {...props}>{props.text}</Button>
}

export default ButtonsComponent
