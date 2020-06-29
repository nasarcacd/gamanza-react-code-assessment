/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import useStyles from './HeaderStyle'

export default function Header() {
  const classes = useStyles()

  return (
    <Typography className={classes.root}>
      <Link className={classes.link} to="/home">
        HOME
      </Link>
      <Link className={classes.link} to="/episodes">
        EPISODES
      </Link>
    </Typography>
  )
}
