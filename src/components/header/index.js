import React from 'react'
import { ALL_COMPONENTS } from '../common'
import { Header, HeaderRow } from './styles'

const HeaderComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <Header>
      <HeaderRow>
        {props &&
          props.components.map((c, i) => {
            const Component = componentMap[c.type]
            const props = c.props
            if (!Component) {
              return null
            }
            return <Component {...props} key={c.id} />
          })}
      </HeaderRow>
    </Header>
  )
}

export default HeaderComponent
