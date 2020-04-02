export const SEND_SOCKET_DATA_ACTION = "SEND_SOCKET_DATA_ACTION"
export const GAME_DATA = "GAME_DATA"

export interface IGameData {
  roundStatus: string
  roundTimeTotal: string
  roundTimeLeft: string
  winningNumber: string
  stopReason: string
  errorCode: string
  device: string
  casino: string
  type: string
  timestamp: number
}

export interface IMonitorData {
  status: string
  roundStatus: string
  winningNumber: string
  wheelStatus: string
  wheelSpeed: string
  ballLauchSpeed: string
  revolutionsCount: string
  wheelId: string
  timestamp: number
  roundId: string
  device: string
  casino: string
  type: string
  errorFlag: string
}

export interface IWinningNumber {
  number: string
  colour: string
  lowHigh: string
  evenOdd: string
  column: string
  dozen: string
  section: string
}

export interface IRoundStatus {
  text: string
  colour: string
}

export const APP_TABLET = 'APP_TABLET'
export const APP_MONITOR = 'APP_MONITOR'
export const APP_ACTIVITY_STREAM = 'APP_ACTIVITY_STREAM'


export const CANCEL_ROUND = "CANCEL"
export const PAUSE_ROUND = "PAUSE_ROUND"
export const SUSPEND_ROUND = "SUSPEND_ROUND"

export const LAST_BET = "LAST_BET"

export const SET_APP_INTERFACE = "SET_APP_INTERFACE"

