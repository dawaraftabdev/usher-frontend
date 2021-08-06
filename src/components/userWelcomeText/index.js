import React from 'react'
import { WelcomeText } from './styles'

const UserWelcomeTextComponent = props => {
  return <WelcomeText>{props && props.value}</WelcomeText>
}
export default UserWelcomeTextComponent
