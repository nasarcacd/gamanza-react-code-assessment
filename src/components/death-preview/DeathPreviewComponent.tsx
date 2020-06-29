import React, { useReducer, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import CardComponent from '../death-card/DeathCardComponent'
import useStyles from './DeathPreviewStyle'
import deathReducer from './deathPreviewReducer'
import IDeath from '../../models/IDeath'
import IDeathState from '../../models/IDeathState'

const initialState: IDeathState = {
  deaths: new Array<IDeath>(),
  page: 0,
}

const DeathPreviewComponent = () => {
  const classes = useStyles()
  const [deathData, deathDispatch] = useReducer(deathReducer, initialState)

  useEffect(() => {
    fetch(`https://breakingbadapi.com/api/deaths`)
      .then(data => data.json())
      .then(deaths => {
        deathDispatch({
          type: 'STACK_DEATHS',
          fetching: false,
          deaths,
        })
      })
      .catch(e => {
        console.log('error', e)
        return e
      })
  }, [deathDispatch])

  return (
    <div className={classes.root}>
      <p className={classes.deathTitle}>Deaths</p>

      <Grid container spacing={3}>
        {deathData.deaths.map((death, index) => (
          <Grid key={index} item xs={12} sm={6} md={6} lg={12}>
            <CardComponent death={death} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default DeathPreviewComponent
