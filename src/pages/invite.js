import React, { useEffect, useState } from 'react'
import { ALL_COMPONENTS } from '../components/common'
import { fetchPageLayout } from '../utils/pageLayouts'

const Invite = () => {
  const [state, setState] = useState(null)
  const componentMap = ALL_COMPONENTS

  useEffect(() => {
    fetchPageLayout('http://localhost:3002/layout', setState)
  }, [])

  return (
    <>
      {state &&
        state.components.map((c, i) => {
          const Component = componentMap[c.type]
          const props = c.props
          props.componentMap = componentMap
          if (!Component) {
            return null
          }
          return <Component {...props} key={c.id} />
        })}
    </>
  )
}
export default Invite
