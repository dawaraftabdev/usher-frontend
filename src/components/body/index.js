import React from 'react'
import { ALL_COMPONENTS } from '../common'
import { MainBody } from './styles'

const BodyComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <MainBody {...props.style}>
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
    </MainBody>
  )
}
export default BodyComponent
