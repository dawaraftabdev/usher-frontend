import React from 'react'
import { Heading } from './styles'

const HeadingComponent = props => {
  return <Heading {...props}>{props && props.value}</Heading>
}
export default HeadingComponent
