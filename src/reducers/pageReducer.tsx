import IAction from '../models/IActions'
import IPage from '../models/IPage'

const pageReducer = (state: IPage, action: IAction) => {
  switch (action.type) {
    case 'ADVANCE_PAGE':
      return { ...state, page: state.page + 1 }
    default:
      return state
  }
}

export default pageReducer
