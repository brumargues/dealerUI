import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../redux/store'
import socketIOClient from 'socket.io-client'
import { sendGameDataAction } from '../redux/actions'
import { IGameData } from '../redux/types'
import { SOCKET_ENDPOINT } from '../constants'

const initSocket = (): ThunkAction<void, AppState, null, Action> => async dispatch => {
  const socket = socketIOClient(SOCKET_ENDPOINT)

  await socket.on('game', (res: string) => {
    const {
      casino,
      type,
      device,
      msg: {
        timestamp,
        message,
        data: {
          timeTotal = '0',
          timeLeft = '0',
          number = '0',
          reason ='',
        } = {},
        related: {
          errorCode = '',
        } = {}
      }
    } = JSON.parse(res)

    const gameData: IGameData = {
      roundStatus: message,
      roundTimeTotal: timeTotal,
      roundTimeLeft: timeLeft,
      winningNumber: number,
      stopReason: reason,
      errorCode,
      casino,
      type,
      device,
      timestamp,
    }

    dispatch(
      sendGameDataAction(gameData)
    )
  })
}

export default initSocket
