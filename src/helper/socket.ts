import io from 'socket.io-client'
import { IGameData, IMonitorData } from '../redux/types'
import { MANUAL_ACTIONS , API_ENDPOINT , SOCKET_ENDPOINT } from '../constants'

export const socket = io(SOCKET_ENDPOINT, { query: { casino: 'agcasino', table: 'virtualroulette4' } })

export const getGameData = (callback: Function) => {
  let lastNumber = ''

  socket.on('game', (res: string) => {
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
          number = '',
          reason = '',
        } = {},
        related: {
          errorCode = '',
        } = {}
      }
    } = JSON.parse(res)

    lastNumber = number ? number : lastNumber

    const gameData: IGameData = {
      roundStatus: message,
      roundTimeTotal: timeTotal,
      roundTimeLeft: timeLeft,
      winningNumber: lastNumber.trim(),
      stopReason: reason,
      errorCode,
      casino,
      type,
      device,
      timestamp,
    }

    callback(gameData)
  })
}

export const getMonitorData = (callback: Function) => {
  socket.on('monitor', (res: string) => {
    const {
      device,
      type,
      casino,
      msg: {
        data: {
          speed = '0',
          status = '',
          wheelStatus = '',
          winningNumber = '',
          ballLauchSpeed = '',
          revolutionsCount = '',
          errorFlag = '0',

        } = {},
        wheelId = '',
        message = '',
        timestamp = 0,
        roundId = '',
      } = {}
    } = JSON.parse(res)

    const monitorData: IMonitorData = {
      status: message,
      roundStatus: status,
      winningNumber,
      wheelStatus,
      wheelSpeed: speed,
      ballLauchSpeed,
      revolutionsCount,
      wheelId,
      timestamp,
      roundId,
      device,
      casino,
      type,
      errorFlag,
    }

    callback(monitorData)
  })
}

export const sendToSocket = async (action: typeof MANUAL_ACTIONS) => {

    /*
    {
"msg":
{
"data": {},
"wheelId": "main", // coming from the last game message
"type": "GAME",
"message": "CLOSESHOW", // CANCELGAME, APPROVED, PAUSE, RESUME
"roundId": "agcasino.virtualroulette2.0", // coming from the last game message
"timestamp": 1584976084776
},
"casino": "agcasino", // coming from the last game message
"type": "PRIMETIME", // coming from the last game message
"device": "virtualroulette2" // coming from the last game message
};
    */

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React POST Request Example' })
  };
  const response = await fetch(`${API_ENDPOINT}`, requestOptions);
  const data = await response.json();

}

