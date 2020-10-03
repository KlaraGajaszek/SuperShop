import React from 'react';
import Header from './components/moleculs/Header/Header';
import StartView from '../src/views/StartView/StartView';

const App = () => {
  return (
    <>
      <Header
        title1={'title1'}
        title2={'title2'}
        title3={'title3'}
        title4={'title4'}
      />
      <StartView />
    </>
  );
};

export default App;
