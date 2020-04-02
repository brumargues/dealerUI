import React, { Component } from 'react'
import moment from 'moment'

interface IState {
  time: string
}

class Clock extends Component<{}, IState> {
  state: IState = {
    time: moment().format('LTS')
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: moment().format('LTS')
      })
    }, 1000)
  }

  render() {
    return (
      <div className="clock">{this.state.time}</div>
    )
  }
}

export default Clock
