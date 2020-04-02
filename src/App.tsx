import * as React from 'react'
import { connect } from 'react-redux'
import screenfull from 'screenfull'
import { Modal, Button } from 'react-bootstrap'
import { getGameData, getMonitorData } from './helper/socket'
import { IGameData, IMonitorData } from './redux/types'
import { DEFAULT_GAME_DATA, DEFAULT_MONITOR_DATA, STATUS_API_ENDPOINT } from './constants'
import Tablet from './component/tablet'

interface IState {
  appType: any
  gameData: IGameData
  monitorData: IMonitorData
  isFullscreen: boolean
}

class App extends React.Component<{}, IState> {
  state = {
    appType: '',
    gameData: DEFAULT_GAME_DATA,
    monitorData: DEFAULT_MONITOR_DATA,
    isFullscreen: false
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search)
    this.setState({appType: urlParams.get('device')})

    getGameData((gameData: IGameData) => this.setState({ gameData }))
    getMonitorData((monitorData: any) => this.setState({ monitorData }))
  }

  render() {
    const { gameData, monitorData, isFullscreen } = this.state

    return(
      <>
        <Modal show={!isFullscreen}>
          <Modal.Body>
            <Button onClick={()=> this.closeModal()}>Toggle Fullscreen</Button>
          </Modal.Body>
        </Modal>
        <Tablet id='tablet' gameData={gameData} monitorData={monitorData} />
      </>
    )
  }

  closeModal = () => {
    this.setState({isFullscreen: true})
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
}

export default connect()(App)
