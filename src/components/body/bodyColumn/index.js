import React from 'react'
import { ALL_COMPONENTS } from '../../common'
import { BodyColumn } from '../styles'

const BodyColumnComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <BodyColumn
      isCenterAligned={props && props.styles && props.styles.textAlign}
    >
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
    </BodyColumn>
  )
}
export default BodyColumnComponent
