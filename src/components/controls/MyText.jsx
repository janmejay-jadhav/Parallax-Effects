import {TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react'

const useStyles = makeStyles({
    root:{
        width:"100%"
    }
})

function MyText(props) {
    const {name,label,value,onChange, error=null,...other}=props;

    const classes = useStyles()
  return (
    <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            className={classes.root}
            {...(error && {error:true,helperText:error})}
            {...other}
          />
  )
}

export default MyText
