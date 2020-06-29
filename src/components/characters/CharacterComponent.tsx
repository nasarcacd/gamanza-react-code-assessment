import React, { useReducer, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import CardComponent from '../../components/character-card/CharacterCardComponent'
import CharacterFilter from '../character-filter/CharacterFilterComponent'
import useStyles from './CharacterStyle'
import ICharacter from '../../models/ICharacter'
import ICharacterState from '../../models/ICharacterState'
import charactersReducer from './charactersReducer'
import pageReducer from '../../reducers/pageReducer'
import InfiniteScroll from '../../components/infinite-scroll/InfiniteScrollComponent'

const initialState: ICharacterState = {
  characters: new Array<ICharacter>(),
  page: 0,
}

const CharacterComponent = () => {
  const classes = useStyles()

  const [characterData, characterDispatch] = useReducer(
    charactersReducer,
    initialState,
  )

  const [pager, pagerDispatch] = useReducer(pageReducer, { page: 1 })

  useEffect(() => {
    fetch(
      `https://breakingbadapi.com/api/characters?limit=6&offset=${
        pager.page * 6
      }`,
    )
      .then(data => data.json())
      .then(characters => {
        characterDispatch({
          type: 'STACK_CHARACTERS',
          fetching: false,
          characters,
        })
      })
      .catch(e => {
        console.log('error', e)
        return e
      })
  }, [characterDispatch, pager.page])

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <p>SORT BY</p>
        </Grid>
        <Grid item xs={12}>
          <CharacterFilter />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {characterData.characters.map((character, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
            <CardComponent character={character} />
          </Grid>
        ))}
      </Grid>
      <InfiniteScroll
        id="character-scroll-list"
        pagerDispatch={pagerDispatch}
      />
    </div>
  )
}

export default CharacterComponent
