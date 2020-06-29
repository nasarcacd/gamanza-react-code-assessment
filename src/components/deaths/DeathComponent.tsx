import React from 'react'
import useStyles from './DeathStyle'
import DeathPreviewComponent from '../death-preview/DeathPreviewComponent'
import DeathCountComponent from '../death-count/DeathCountComponent'

const DeathComponent = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <DeathCountComponent />
      <DeathPreviewComponent />
    </div>
  )
}

export default DeathComponent
