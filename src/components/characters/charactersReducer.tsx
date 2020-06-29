import IAction from '../../models/IActions'
import ICharacter from '../../models/ICharacter'
import ICharacterState from '../../models/ICharacterState'
import IFetching from '../../models/IFetching'

interface ICharacterAction extends IAction, IFetching {
  characters?: ICharacter[]
}

const charactersReducer = (state: ICharacterState, action: ICharacterAction) => {
  switch (action.type) {
    case 'STACK_CHARACTERS':
      return {
        ...state,
        characters: action.characters
          ? state.characters.concat(action.characters)
          : new Array<ICharacter>(),
      }
    default:
      return state
  }
}

export default charactersReducer
