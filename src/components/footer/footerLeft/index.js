import React from 'react'
import { ALL_COMPONENTS } from '../../common'
import { FooterLeft } from '../styles'

const FooterLeftComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <FooterLeft>
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
    </FooterLeft>
  )
}
export default FooterLeftComponent
