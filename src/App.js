import React from 'react'
import './App.css';
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'
import { theme } from './theme';
import { ThemeProvider } from '@material-ui/core';

function App() {
  const user = useSelector(selectUser)
  console.log(user)

  return (
    <ThemeProvider theme={theme}>
      {user ? <MainPage /> : <LoginPage />}
    </ThemeProvider>
  );
}

export default App;
