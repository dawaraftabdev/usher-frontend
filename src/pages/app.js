import React from 'react'
import { GlobalStyles } from '@theguarantors/ui-kit-v3/dist/assets/styles/index'
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'
import NotFound from './404'
import Invite from './invite'

const history = createBrowserHistory()

export const app = () => {
  return (
    <>
      <GlobalStyles />
      <Router history={history}>
        <Switch>
          <Route path={`/v2/landlord/invite`} exact component={Invite} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}
