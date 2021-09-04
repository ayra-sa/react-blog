import React, {useEffect, useState} from 'react'
import {useStyles, CssTextField} from '../theme'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {login} from '../features/userSlice'

const Login = (callback, validate) => {
  const classes = useStyles()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
    
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(
      login({
        username,
        password,
        loggedIn: true,
      })
    )

    setUsername('')
    setPassword('')
  }

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <CssTextField
                className={classes.margin}
                id="custom-css-standard-input"
                label="Username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <CssTextField
                className={classes.margin}
                label="Password"
                id="custom-css-standard-input"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            {username !== '' && password !== '' ?
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              >
                  Sign In
              </Button> : 
              <Button
              disabled
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              >
                  Sign In
              </Button>
              }
            
        </form>
    )
}

export default Login