import React, { useEffect, useState } from 'react'
import '@theguarantors/ui-kit-v3/dist/fonts/fonts.css'
import { GlobalStyles } from '@theguarantors/ui-kit-v3/dist/assets/styles/index'
import { ALL_COMPONENTS } from '../components/common'
import { fetchPageLayout } from '../utils/pageLayouts'
import '../styles/global.css'

const SocialLogin = () => {
  const [state, setState] = useState(null)
  const componentMap = ALL_COMPONENTS

  useEffect(() => {
    fetchPageLayout('http://localhost:3002/social-login', setState)
  }, [])

  return (
    <>
      <GlobalStyles />
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
export default SocialLogin
