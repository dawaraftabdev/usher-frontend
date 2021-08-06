import React from 'react'
import { Button } from '@theguarantors/ui-kit-v3'

const SocialButtonComponent = props => {
  return <Button {...props}>{props.text}</Button>
}

export default SocialButtonComponent
