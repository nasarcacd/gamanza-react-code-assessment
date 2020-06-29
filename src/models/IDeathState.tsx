import IDeath from './IDeath'
import IPage from './IPage'

interface IDeathState extends IPage {
  deaths: IDeath[]
}

export default IDeathState
