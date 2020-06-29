import IAction from '../../models/IActions'
import IDeathState from '../../models/IDeathState'
import IFetching from '../../models/IFetching'
import IDeath from '../../models/IDeath'

interface IDeathAction extends IAction, IFetching {
  deaths?: IDeath[]
}

const deathReducer = (state: IDeathState, action: IDeathAction) => {
  switch (action.type) {
    case 'STACK_DEATHS':
      return {
        ...state,
        deaths: action.deaths
          ? action.deaths.slice(0, 5)
          : new Array<IDeath>(),
      }
    default:
      return state
  }
}

export default deathReducer
