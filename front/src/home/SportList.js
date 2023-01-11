import React from "react"

const SportList = ({ date }) => {
  return (
    <React.Fragment>
      <li className="table-row">
        <div className="col col-1" data-label="Job Id">
          {date.nation}
        </div>
        <div className="col col-2" data-label="Customer Name">
          {date.title}
        </div>
        <div className="col col-3" data-label="Amount">
          {date.date.substr(0, 10)}
        </div>
        <div className="col col-4" data-label="Payment Status">
          {date.teams}
        </div>
      </li>
    </React.Fragment>
  )
}

export default SportList
