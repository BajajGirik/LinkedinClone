import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Contents from './Components/Contents';
import Header from './Components/Header';
import Loading from './Components/Loading';
import Login from './Components/Login';
import SidebarL from './Components/SidebarL';
import SidebarR from './Components/SidebarR';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispath = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth && userAuth.displayName != null) {
        dispath(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayname: userAuth.displayName,
          photo: userAuth.photoURL
        }));
      }
    })
    setTimeout(() => setLoading(false), 2000);
    
  }, []);

  return (
  <div className="App">
      {loading ?
        (
          <Loading /> 
        ) : (
        !user ? (
          <Login />
          ) : (
          <>
            <Header />
            <Main>
              <SidebarL />
              <Contents />
              <SidebarR />
            </Main>
          </>
        ) 
    )
    }                                                              
    </div>
  );
}

export default App;

const Main = styled.div`
  padding-top: 3.5625rem;
  display: flex;

  @media screen and (max-width: 53rem) {
    flex-direction: column;
  }
`;
