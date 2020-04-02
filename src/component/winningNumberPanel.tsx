import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IWinningNumber } from '../redux/types'

interface IProps {
  data: IWinningNumber
}

class WinningNumberPanel extends Component<IProps, {}> {
  render() {
    const {
      data : {
        number = '',
        colour = '',
        lowHigh = '',
        evenOdd = '',
        column = '',
        dozen = '',
        section = '',
      } = {}
    } = this.props

    return(
      <>
        <div className="col-8 winning-number">
          <div className="number">{number}</div>
          <div className="positions">{(number !== '0') && `${colour}, ${evenOdd}, ${lowHigh}`}</div>
        </div>
        <div className="col-4 winning-number-sections">
          <div className="row labels">
            <div className="col">COL</div>
            <div className="col">DOZ</div>
            <div className="col">SEC</div>
          </div>
          <div className="row sections">
            <div className="col">{column}</div>
            <div className="col">{dozen}</div>
            <div className="col">{section}</div>
          </div>
          </div>
      </>
    )
  }
}

export default connect()(WinningNumberPanel)
