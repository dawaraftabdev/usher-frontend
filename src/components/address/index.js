import React from 'react'
import { ALL_COMPONENTS } from '../common'
import { Address } from './styles'

const AddressComponent = props => {
  const componentMap = ALL_COMPONENTS
  return (
    <Address>
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
    </Address>
  )
}
export default AddressComponent
