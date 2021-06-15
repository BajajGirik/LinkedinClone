import React from 'react';
import styled from 'styled-components';
import './App.css';
import Contents from './Components/Contents';
import Header from './Components/Header';
import Login from './Components/Login';
import SidebarL from './Components/SidebarL';
import SidebarR from './Components/SidebarR';

function App() {
  return (
    <div className="App">
      {
      true ? (
        <Login />
        ) :
          (
            <>
              <Header />
              <Main>
                <SidebarL />
                <Contents />
                <SidebarR />
              </Main>
            </>
          )
      
      }

      
    </div>
  );
}

export default App;

const Main = styled.div`
  padding-top: 3.5625rem;
  display: flex;
`;
