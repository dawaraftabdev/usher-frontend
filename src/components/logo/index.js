import React from 'react'
import { LogoImage } from './styles'
import { IMAGES } from '../../images'

const LogoComponent = props => {
  if (props && props.src && IMAGES[props.src]) {
    return <LogoImage src={IMAGES[props.src]} />
  }
  return null
}
export default LogoComponent
