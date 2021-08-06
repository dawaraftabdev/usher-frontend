import React from 'react'
import { ALL_COMPONENTS } from '../common'

const FormComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <div>
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
    </div>
  )
}
export default FormComponent
