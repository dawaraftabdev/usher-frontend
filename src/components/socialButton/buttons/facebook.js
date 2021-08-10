import React from 'react'
import { FacebookButton } from '@theguarantors/ui-kit-v3'

const FacebookButtonComponent = props => {
  return <FacebookButton {...props}>{props.text}</FacebookButton>
}

export default FacebookButtonComponent
