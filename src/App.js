import React from 'react';
import Login from './Views/login/login'
import {useSelector} from 'react-redux'

function App() {
  const {auth} = useSelector(state => state)
  return (
    <>
    {!auth.LoggedIn ? <Login /> : 
    <h1></h1>
    }
    </>
  );
}

export default App;
