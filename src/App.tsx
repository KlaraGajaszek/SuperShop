import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components/organisms/Header/Header'
import { StartPage } from './pages/StartPage/StartPage'
import { SignIn } from './pages/SignIn/SignIn'
import { router } from '../src/routing/router'

const App = () => {
  const { home, signin } = router

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={home} component={StartPage} />
        <Route exact path={signin} component={SignIn} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
