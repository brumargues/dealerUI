import React from 'react';

const Tablet = () => {
  const cancel = false

  return (
    <>
      <div className="row">
        <div className="col-8">00:00:00pm</div>
        <div className="col-2">Active</div>
        <div className="col-2">Dead</div>
      </div>

      {cancel
       ? <MainPanel />
       : <CancelReasonPanel />
      }
    </>
  );
}

const MainPanel = () => {
  return (
    <>
      <div className="row">
        <div className="col-8">No More Bets</div>
        <div className="col-4">0</div>
      </div>


      <div className="row">
        <div className="col-8">17 black,even,high</div>
        <div className="col-4">1st | 3rd | voisins du zero</div>
      </div>

      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-primary">Pause</button>
        </div>
        <div className="col">
          <button type="button" className="btn btn-warning">Suspend</button>
        </div>
        <div className="col">
          <button type="button" className="btn btn-danger">Cancel</button>
        </div>
      </div>
    </>
  )
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

export default Tablet;
