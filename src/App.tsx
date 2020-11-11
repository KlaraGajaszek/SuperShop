import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/organisms/Header/Header';
import StartView from './pages/StartView/StartView';
import ProductPage from './pages/Product/ProductPage';
import FormPage from './pages/Form/FormPage';
import LogInForm from './pages/LogInForm/LogInForm';
import SignInForm from './pages/SignInForm/SignInForm';
import { AppWrapper, PageWrapper } from './AppStyles';

const App: FC = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <PageWrapper>
          <Switch>
            <Route path="/account">
              <LogInForm />
              <SignInForm />
            </Route>
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
        </PageWrapper>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
