import React from 'react'
import { GoogleButton } from '@theguarantors/ui-kit-v3'

const GoogleButtonComponent = props => {
  return <GoogleButton {...props}>{props.text}</GoogleButton>
}

export default GoogleButtonComponent
