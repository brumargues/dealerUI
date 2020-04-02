import { GAME_DATA } from '../types'
import { IGameDataAction } from '../actions'

const gameDataReducer = (state = {}, action: IGameDataAction) => {
  switch (action.type) {
    case GAME_DATA: {
      return {
        ...state,
        ...action.payload
      }
    }
    default: return state
  }
}

export default gameDataReducer
