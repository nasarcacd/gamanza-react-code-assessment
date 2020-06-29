import ICharacter from './ICharacter'
import IPage from './IPage'

interface ICharacterState extends IPage {
  characters: ICharacter[]
}

export default ICharacterState
