import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/organisms/Header/Header';
import StartView from './pages/StartView/StartView';
import ProductPage from './pages/Product/ProductPage';
import FormPage from './pages/Form/FormPage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/products/form">
          <FormPage />
        </Route>
        <Route path="/products/:id">
          <ProductPage />
        </Route>
        <Route path="/">
          <StartView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
