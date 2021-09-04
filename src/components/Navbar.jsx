import React, {useState} from 'react'
import { useStyles } from '../theme'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { selectUser, logout, setInput } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineLogout, AiOutlineSearch} from 'react-icons/ai'

// import SearchIcon from '@material-ui/icons/Search';

const Navbar = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const [value, setValue] = useState('tech')

    const handleLogout = (e) => {
      dispatch(logout())
    }

    const search = e => {
      e.preventDefault()
      dispatch(setInput(value))
    }

    return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Ayra Blog
          </Typography>
          <div className={classes.search}>
            {/* <Button onClick={search} className={classes.searchIcon}>
              <AiOutlineSearch />
            </Button> */}
            <InputBase
              style={{width: '90%'}}
              placeholder='Search..'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
                inputProps={{ 'aria-label': 'search' }}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Button onClick={search} className={classes.searchIcon}>
              <AiOutlineSearch />
            </Button>
          </div>
          {/* <div className={classes.grow} /> */}
          <div className={classes.right}>
            <Typography variant="h6" noWrap>
                Wellcome, {user.username}
            </Typography>
            <Button onClick={e => handleLogout(e)}>
              <AiOutlineLogout style={{color: '#fff'}}/>
            </Button>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Navbar
