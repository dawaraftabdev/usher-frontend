import React, { useEffect, useState } from 'react'
import { ALL_COMPONENTS } from '../components/common'
import { fetchPageLayout } from '../utils/pageLayouts'
import { theme } from '@theguarantors/ui-kit-v3/design-system'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '@theguarantors/ui-kit-v3/assets/styles/index'
import '../styles/global.css'
import '@theguarantors/ui-kit-v3/fonts/fonts.css'

const Index = () => {
  const [state, setState] = useState(null)
  const componentMap = ALL_COMPONENTS
  useEffect(() => {
    fetchPageLayout('http://localhost:3002/layout', setState)
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  )
}
export default Index
