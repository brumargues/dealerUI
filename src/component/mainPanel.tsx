import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IRoundStatus } from '../redux/types'
import { ROUND_STATUS , winningNumberSectorMap } from '../constants'
import WinningNumberPanel from './winningNumberPanel'

interface IProps {
  data: {
    roundStatus: string
    roundTimeTotal: string
    roundTimeLeft: string
    winningNumber: string
  }
}

class MainPanel extends Component<IProps, {}> {
  render() {
    const { roundStatus, roundTimeLeft, winningNumber } = this.props.data
    const status: IRoundStatus = ROUND_STATUS[roundStatus]

    return (
      <div className="multi-panel">
        <div className="row status-timer">
          <div className={`col-8 round-status ${status?.colour}`}>
            <div className="status-text">{status?.text}</div>
          </div>
          <div className="col-4 timer">
            <div className={`circle ${status?.colour}`}>
              <div className="circle-inner">
                <div className="circle-text">{roundTimeLeft}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row winning-number-panel">
          <WinningNumberPanel data={winningNumberSectorMap[winningNumber]} />
        </div>
      </div>
    )
  }
}

export default connect()(MainPanel)
