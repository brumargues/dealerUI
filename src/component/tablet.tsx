import React, { Component } from 'react'
import { connect } from 'react-redux'
import { socket } from '../helper/socket'
import { IGameData, IMonitorData } from '../redux/types'
import { STATUS_API_ENDPOINT } from '../constants'
import ModalConfirm from './modalConfirm'
import MainPanel from './mainPanel'
import Clock from './clock'

interface IProps {
  gameData: IGameData
  monitorData: IMonitorData
}

interface IState {
  modalType: string
  isOpen: boolean
  isAlive: boolean
}

class Tablet extends Component<IProps, IState> {
  state: IState = {
    modalType: '',
    isOpen: false,
    isAlive: true,
  }

  componentDidMount() {
    fetch(STATUS_API_ENDPOINT)
      .then(res => res.json())
      .then(data => this.setState({ isOpen: data.isOpen }))

    socket.on('disconnect', () => this.setState({ isAlive: false }))
    socket.on('reconnect', () => this.setState({ isAlive: true }))
  }

  render() {
    const {
      roundStatus,
      roundTimeLeft,
      roundTimeTotal,
      winningNumber,
    } = this.props.gameData

    const { modalType, isOpen, isAlive } = this.state

    return(
      <>
        <ModalConfirm type={modalType} />

        <div className="row header">
          <div className="col-8">
            <Clock />
          </div>
          <div className={`col-2 ${isAlive ? 'green' : 'red'}`}>{isAlive ? 'Active' : 'Dead'}</div>
          <div className={`col-2 ${isOpen ? 'green' : 'red'}`}>{isOpen ? 'Online' : 'Offline'}</div>
        </div>

        <MainPanel data={{ roundStatus, roundTimeLeft, roundTimeTotal, winningNumber }} />

        <div className="row footer action-buttons">
          <div className="col">
            <button type="button" className="btn btn-primary btn-lg" onClick={() => this.openModal('pause')}>Pause</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-warning btn-lg" onClick={() => this.openModal('suspend')}>Suspend</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-danger btn-lg" onClick={() => this.openModal('cancel')}>Cancel</button>
          </div>
        </div>
      </>
    )
  }

  openModal = (modalType: string) => {
    this.setState({ modalType })
  }

}



const CancelReasonPanel = () => {
  return (
    <>
      <div className="row">
        <h2>Cancel Round Reason</h2>
      </div>

      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-danger">NO SPIN</button>
        </div>
        <div className="col">
          <button type="button" className="btn btn-danger">BALL OUT</button>
        </div>
        <div className="col">
          <button type="button" className="btn btn-danger">WHEEL CLEAN</button>
        </div>
      </div>
    </>
  )
}


export default connect()(Tablet)
