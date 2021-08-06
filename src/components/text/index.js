import React from 'react'
import { Text } from './styles'

const TextComponent = props => {
  console.log(props)
  return (
    <Text
      styles={props && props.styles}
      isBottom={props.isBottom ? true : false}
    >
      {props && props.value}
    </Text>
  )
}
export default TextComponent
