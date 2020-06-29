import React, { useReducer, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import CardComponent from '../episode-card/EpisodeCardComponent'
import useStyles from './EpisodeStyle'
import episodeReducer from './episodeReducer'
import IEpisode from '../../models/IEpisode'
import IEpisodeState from '../../models/IEpisodeState'

const initialState: IEpisodeState = {
  episodes: new Array<IEpisode>(),
  page: 0,
}

const EpisodesComponent = () => {
  const classes = useStyles()

  const [episodesData, episodesDispatch] = useReducer(
    episodeReducer,
    initialState,
  )

  useEffect(() => {
    fetch(
      `https://breakingbadapi.com/api/episodes`,
    )
      .then(data => data.json())
      .then(episodes => {
        console.log("episodes", episodes)
        episodesDispatch({
          type: 'STACK_EPISODES',
          fetching: false,
          episodes,
        })
      })
      .catch(e => {
        console.log('error', e)
        return e
      })
  }, [episodesDispatch])

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {episodesData.episodes.map((episode, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <CardComponent episode={episode} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default EpisodesComponent
