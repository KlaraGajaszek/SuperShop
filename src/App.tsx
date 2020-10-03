import React from 'react';
import Header from './components/moleculs/Header/Header';
import StartView from '../src/views/StartView/StartView';

export enum HeaderTitle {
  title1 = 'title1',
  title2 = 'title2',
  title3 = 'title3',
  title4 = 'title4',
}

export enum HeaderLinkTitle {
  link1 = 'title1',
  link2 = 'title2',
  link3 = 'title3',
  link4 = 'title4',
}

const App = () => {
  return (
    <>
      <Header
        title1={HeaderTitle.title1}
        title2={HeaderTitle.title2}
        title3={HeaderTitle.title3}
        title4={HeaderTitle.title4}
        link1={HeaderLinkTitle.link1}
        link2={HeaderLinkTitle.link2}
        link3={HeaderLinkTitle.link3}
        link4={HeaderLinkTitle.link4}
      />
      <StartView />
    </>
  );
};

export default App;
