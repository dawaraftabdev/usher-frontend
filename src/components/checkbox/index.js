import React from 'react'
import { StyledCheckbox } from './styles'

const CheckboxComponent = props => {
  console.log(props)
  return <StyledCheckbox {...props} />
}

export default CheckboxComponent
