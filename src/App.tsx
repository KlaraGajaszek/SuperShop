import React, { FC } from 'react';
import Header from './components/moleculs/Header/Header';
import StartView from '../src/views/StartView/StartView';
import { PropsProduct } from './models/Product';
import { HeaderType } from '../src/components/moleculs/Header/Header';

type App = PropsProduct & HeaderType;

const App: FC = () => {
  return (
    <>
      <Header />
      <StartView />
    </>
  );
};

export default App;
