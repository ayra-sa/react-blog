import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useStyles} from '../theme'

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.load}>
      <CircularProgress />
    </div>
  );
}