import React from 'react'
import { ALL_COMPONENTS } from '../../common'
import { StepBody } from '../styles'

const StepComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <StepBody {...props.style}>
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
    </StepBody>
  )
}
export default StepComponent
