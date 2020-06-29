import IAction from '../../models/IActions'
import IEpisodeState from '../../models/IEpisodeState'
import IFetching from '../../models/IFetching'
import IEpisode from '../../models/IEpisode'

interface IEpisodeAction extends IAction, IFetching {
  episodes?: IEpisode[]
}

const episodeReducer = (state: IEpisodeState, action: IEpisodeAction) => {
  switch (action.type) {
    case 'STACK_EPISODES':
      return {
        ...state,
        episodes: action.episodes
          ? state.episodes.concat(action.episodes)
          : new Array<IEpisode>(),
      }
    default:
      return state
  }
}

export default episodeReducer
