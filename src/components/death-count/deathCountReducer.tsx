import IAction from '../../models/IActions'
import ICount from '../../models/ICount'

interface IDeathAction extends IAction {
  count: number
}

const deathCountReducer = (state: ICount, action: IDeathAction) => {
  switch (action.type) {
    case 'COUNT_DEATHS':
      return {
        ...state,
        count: action.count,
      }
    default:
      return state
  }
}

export default deathCountReducer
