import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/organisms/Header/Header'
import StartView from './pages/StartView/StartView'
import ProductPage from './pages/Product/ProductPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/">
          <StartView />
        </Route>
        <Route path="/d">
          <ProductPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
