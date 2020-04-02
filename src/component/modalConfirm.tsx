import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'

interface IProps {
  type: string
}

interface IState {
  showModal: boolean
  confirmCancel: boolean
}

class ModalConfirm extends Component<IProps, IState> {
  state: IState = {
    showModal: false,
    confirmCancel: false,
  }

  componentWillReceiveProps() {
    this.setState({ showModal: true })
  }

  render() {
    const { showModal, confirmCancel } = this.state
    const { type } = this.props

    return (
      <Modal show={showModal}>
        <Modal.Body>

          {!confirmCancel ?
            <>
              <h1>Are you sure you want to {type.toUpperCase()}?</h1>

              <div className="row">
                <div className="col">
                  <button type="button" className={`btn btn-lg btn-block ${this.setColour[type]}`} onClick={() => this.setConfirmation()}>YES</button>
                </div>
                <div className="col">
                  <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={() => this.closeModal()}>NO</button>
                </div>
              </div>
            </>
          :
            <>
              <h1>Cancel Round Reason</h1>

              <div className="row">
                <div className="col">
                  <button type="button" className="btn btn-danger btn-lg btn-block" onClick={() => this.closeModal()}>NO SPIN</button>
                </div>
                <div className="col">
                  <button type="button" className="btn btn-danger btn-lg btn-block" onClick={() => this.closeModal()}>BALL OUT</button>
                </div>
                <div className="col">
                  <button type="button" className="btn btn-danger btn-lg btn-block" onClick={() => this.closeModal()}>WHEEL CLEAN</button>
                </div>
              </div>
            </>
          }
        </Modal.Body>
      </Modal>
    )
  }

  closeModal = () => {
    this.setState({ showModal: false, confirmCancel: false })
  }

  setConfirmation = () => {
    this.setState({ confirmCancel: true })
  }

  setColour: { [type: string]: string } = {
    'pause': 'btn-primary',
    'suspend': 'btn-warning',
    'cancel': 'btn-danger',
  }
}

export default connect()(ModalConfirm)
