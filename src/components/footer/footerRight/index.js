import React from 'react'
import { ALL_COMPONENTS } from '../../common'
import { FooterRight } from '../styles'

const FooterRightComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <FooterRight>
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
    </FooterRight>
  )
}
export default FooterRightComponent
