import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/organisms/Header/Header';
import StartView from './pages/StartView/StartView';
import ProductPage from './pages/Product/ProductPage';
import { FormPage } from './pages/Form/FormPage';
import {
  AppWrapper,
  PageWrapper,
  AccountWrapper,
  ProductWrapper,
} from './AppStyles';

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <PageWrapper>
          <Switch>
            <Route path="/products/form">
              <FormPage />
            </Route>
            <Route path="/products/:id">
              <ProductWrapper>
                <ProductPage />
              </ProductWrapper>
            </Route>
            <Route path="/">
              <StartView />
            </Route>
          </Switch>
        </PageWrapper>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
