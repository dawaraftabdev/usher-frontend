import React from 'react'
import { MapImage } from './styles'
import { IMAGES } from '../../images'

const MapComponent = props => {
  return <MapImage src={props && IMAGES[props.src]} />
}
export default MapComponent
