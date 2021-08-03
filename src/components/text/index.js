import React from 'react'
import { Text } from './styles'

const TextComponent = props => {
  return (
    <Text isBottom={props.isBottom ? true : false}>{props && props.value}</Text>
  )
}
export default TextComponent
