import React, { useReducer, useEffect } from 'react'
import useStyles from './DeathCountStyle'
import deathReducer from './deathCountReducer'
import ICount from '../../models/ICount'

const initialState: ICount = {
  count: 0,
}

const DeathCountComponent = () => {
  const classes = useStyles()
  const [deathCountData, deathDispatch] = useReducer(deathReducer, initialState)

  useEffect(() => {
    fetch(`https://breakingbadapi.com/api/death-count`)
      .then(data => data.json())
      .then(deathCount => {
        deathDispatch({
          type: 'COUNT_DEATHS',
          count: deathCount[0].deathCount,
        })
      })
      .catch(e => {
        console.log('error', e)
        return e
      })
  }, [deathDispatch])

  return (
    <div className={classes.root}>
      <p className={classes.totalDeathTitle}>
        TOTAL DEADS: {deathCountData.count}
      </p>
    </div>
  )
}

export default DeathCountComponent
