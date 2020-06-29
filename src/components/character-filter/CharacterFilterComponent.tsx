import React from 'react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import useStyles from './CharacterFilterStyle'

export default function CharacterFilterComponent() {
  const classes = useStyles()
  return (
    <Grid container alignItems="center" className={classes.root}>
      <span>Name</span>
      <Divider orientation="vertical" flexItem />
      <span>Birthday</span>
      <Divider orientation="vertical" flexItem />
      <span>Portrayer</span>
    </Grid>
  )
}
