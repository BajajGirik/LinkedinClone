import React from 'react';
import styled from 'styled-components';
import './App.css';
import Contents from './Components/Contents';
import Header from './Components/Header';
import SidebarL from './Components/SidebarL';

function App() {
  return (
    <div className="App">
      <Header />

      <Main>
        <SidebarL />
        <Contents />
        {/* Sidebar right */}
      </Main>
    </div>
  );
}

export default App;

const Main = styled.div`
  padding-top: 3.5625rem;
  display: flex;
`;
