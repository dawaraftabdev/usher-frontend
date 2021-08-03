import React from 'react'
import { ALL_COMPONENTS } from '../common'
import { Footer, FooterRow } from './styles'

const FooterComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <Footer>
      <FooterRow>
        {props &&
          props.components.map((c, i) => {
            const Component = componentMap[c.type]
            const props = c.props
            if (!Component) {
              return null
            }
            return <Component {...props} key={c.id} />
          })}
      </FooterRow>
    </Footer>
  )
}
export default FooterComponent
