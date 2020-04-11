import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { updateLocation } from 'src/reducers/locationSlice';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function CustomizedInputBase({ cityObject, params }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Paper component="form" className={classes.root}>
      <TextField
        className={classes.input}
        placeholder="Search for your city"
        {...params}
        InputProps={{
          // Weird workaround to remove underline
          ...params.InputProps,
          disableUnderline: true
        }}
      />

      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        onClick={() => dispatch(updateLocation(cityObject))}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
