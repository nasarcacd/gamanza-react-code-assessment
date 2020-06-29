import IEpisodes from './IEpisode'
import IPage from './IPage'

interface IEpisodeState extends IPage {
  episodes: IEpisodes[]
}

export default IEpisodeState
