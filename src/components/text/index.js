import React from 'react'
import { StyledHelperText, StyledHeader4 } from './styles'

const TextComponent = props => {
  if (props && props.isHelperText) {
    return (
      <StyledHelperText
        styles={props && props.styles}
        isBottom={props.isBottom ? true : false}
      >
        {props && props.value}
      </StyledHelperText>
    )
  }
  return (
    <StyledHeader4
      styles={props && props.styles}
      isBottom={props.isBottom ? true : false}
    >
      {props && props.value}
    </StyledHeader4>
  )
}
export default TextComponent
