import React from 'react';
import { Wrap } from './components/Wrap';
import { Menu } from './components/Menu';
import { Header } from './components/Header';
import { ContentWrap } from './components/ContentWrap';
import { Content } from './components/Content';

function App() {
  return (
    <Wrap>
    <Menu />
    <ContentWrap>
      <Header/>
      <Content/>
    </ContentWrap>
    </Wrap>
  );
}

export default App;
