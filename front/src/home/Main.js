import React, { useEffect, useState } from "react"
import Calendar from "react-calendar"
import moment from "moment"

import "./Main.css"
import "react-calendar/dist/Calendar.css"
import SportList from "./SportList"

const Main = () => {
  console.log(process.env.REACT_APP_URL)
  var dateArr = []
  const [dates, setDate] = useState()
  const [value, setValue] = useState(new Date())
  const [visible, setIsvisible] = useState(true)

  //   if (dates) {
  //     console.log(dates.date.format("YYYY-MM-DD"))
  //   }

  //   달력 필터링 함수
  if (dates) {
    dateArr = Object.values(dates).filter((data) => {
      return data.date.substr(0, 10) === moment(value).format("YYYY-MM-DD")
    })
  }

  const dateChange = () => {
    setIsvisible(false)
  }

  const reset = () => {
    setIsvisible(true)
  }

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(`${process.env.REACT_APP_URL}/admin`)
      const resData = await res.json()
      console.log(resData)
      setDate(resData.sports)
    }
    fetchdata()
  }, [])

  if (!dates) {
    return <div></div>
  }

  return (
    <React.Fragment>
      {dates ? (
        <div>
          <div className="container">
            <h2>
              축구 일정표
              {/* <small>Triggers on 767px</small> */}
            </h2>
            <ul className="responsive-table">
              <li className="table-header">
                <div className="col col-1">League</div>
                <div className="col col-2">Title</div>
                <div className="col col-3">Date</div>
                <div className="col col-4">Teams</div>
              </li>
              {visible
                ? Object.values(dates).map((date) => {
                    return <SportList date={date} />
                  })
                : dateArr.map((date) => {
                    return <SportList date={date} />
                  })}
            </ul>
          </div>
          <div className="calendar">
            <button className="button calbutton" onClick={reset}>
              초기화
            </button>
            <Calendar
              onChange={setValue}
              value={value}
              onClickDay={dateChange}
            />
          </div>{" "}
        </div>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  )
}

export default Main
