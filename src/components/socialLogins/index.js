import React from 'react'
import { ALL_COMPONENTS } from '../common'
import { SocialLoginBody } from './styles'

const SocialLoginsComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <SocialLoginBody {...props.style}>
      {props &&
        props.components &&
        props.components.map((c, i) => {
          const Component = componentMap[c.type]
          const props = c.props
          if (!Component) {
            return null
          }
          return <Component {...props} key={c.id} />
        })}
    </SocialLoginBody>
  )
}
export default SocialLoginsComponent
