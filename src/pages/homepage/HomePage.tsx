import React from 'react'
import Grid from '@material-ui/core/Grid';
import CharacterComponent from '../../components/characters/CharacterComponent'
import DeathComponent from '../../components/deaths/DeathComponent'
import useStyles from './HomeStyle';

const HomePage = () => {
  const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <CharacterComponent />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <DeathComponent />
          </Grid>
        </Grid>
      </div>
    );
}


export default HomePage
