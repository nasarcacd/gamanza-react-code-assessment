import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import useStyles from './CharacterCardStyle'
import ICharacter from '../../models/ICharacter'

const CharacterCardComponent = (props: { character: ICharacter }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" alt="" height="140" image={props.character.img} title={props.character.portrayed} />
        <CardContent>
          <Typography gutterBottom variant="body1" component="p">
            {props.character.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.character.occupation}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.character.status}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.character.birthday}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CharacterCardComponent
