import { Typography } from '@material-ui/core'
import React from 'react'
import Login from '../components/Login'
import { useStyles } from '../theme'

const LoginPage = () => {
    const classes = useStyles()
    return (
        <div className={classes.login}>
            <Typography variant='h4'>Login here</Typography>
            <Login />
        </div>
    )
}

export default LoginPage