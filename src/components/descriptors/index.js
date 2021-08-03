import React from 'react'
import { ALL_COMPONENTS } from '../common'
import { Descriptors } from './styles'

const DescriptorsComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <Descriptors>
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
    </Descriptors>
  )
}
export default DescriptorsComponent
