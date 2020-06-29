import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import useStyles from './EpisodeCardStyle'
import IEpisode from '../../models/IEpisode'

const EpisodeCardComponent = (props: { episode: IEpisode }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="body1" component="p">
            {props.episode.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Season: {props.episode.season}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Episode: {props.episode.episode}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Air Date: {props.episode.air_date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default EpisodeCardComponent
