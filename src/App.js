import React from 'react';
import ReactDOM from "react-dom/client";
import { Wrap } from './components/Wrap';
import { Menu } from './components/Menu';
import { Header } from './components/Header';
import { ContentWrap } from './components/ContentWrap';
import { Home } from './components/Home';
import { Event } from './components/Event';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Wrap>
      <Menu />
      <ContentWrap>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
          </Routes>
      </ContentWrap>
      </Wrap>
    </BrowserRouter>
  );
}

export default App;
