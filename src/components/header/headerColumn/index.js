import React from 'react'
import { ALL_COMPONENTS } from '../../common'
import { HeaderColumn } from '../styles'

const HeaderColumnComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <HeaderColumn>
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
    </HeaderColumn>
  )
}
export default HeaderColumnComponent
