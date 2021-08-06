import React from 'react'
import { ALL_COMPONENTS } from '../common'
import { MainStepsBody } from './styles'

const StepsComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <MainStepsBody {...props.style}>
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
    </MainStepsBody>
  )
}
export default StepsComponent
