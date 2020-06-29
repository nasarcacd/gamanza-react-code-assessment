import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import useStyles from './DeathCardStyle'
import IDeath from '../../models/IDeath'

export default function DeathCardComponent(props: { death: IDeath }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.death.death}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.death.cause}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.death.responsible}
          </Typography>
          <Typography
            className={classes.lastWord}
            variant="body2"
            color="textSecondary"
            component="p">
            {props.death.last_words}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
