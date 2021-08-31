import React from 'react'
import { ALL_COMPONENTS } from '../../common'
import { StepsDots } from '../styles'

const StepsDotsComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <StepsDots {...props.style}>
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
    </StepsDots>
  )
}
export default StepsDotsComponent
