import { IGameData ,GAME_DATA } from './types'

export interface IGameDataAction {
  type: typeof GAME_DATA
  payload: IGameData
}

export const sendGameDataAction = (data: IGameData): IGameDataAction => ({ type: GAME_DATA, payload: data })

