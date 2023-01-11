import React, { useRef } from "react";
import Button from "../shared/UI/Button";

import "./Admin.css";

const Admin = () => {
  let refTitle = useRef();
  let refNation = useRef();
  let refDate = useRef();
  let refHometeam = useRef();
  let refAwayteam = useRef();

  const SubmitHandler = async (event) => {
    event.preventDefault();

    const jsondata = {
      title: refTitle.current.value,
      nation: refNation.current.value,
      date: refDate.current.value,
      hometeam: refHometeam.current.value,
      awayteam: refAwayteam.current.value,
    };

    try {
      await fetch("http://localhost:5000/admin/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsondata),
      }).then((response) => console.log(response.json()));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="card authentication">
        <div className="form-control">
          <form onSubmit={SubmitHandler}>
            <label>Title</label>
            <input type="text" label="Title" ref={refTitle} />
            <label>nation</label>
            <input type="text" label="nation" ref={refNation} />
            <label>date</label>
            <input type="text" label="date" ref={refDate} />
            <label>hometeam</label>
            <input type="text" label="hometeam" ref={refHometeam} />
            <label>awayteam</label>
            <input type="text" label="awayteam" ref={refAwayteam} />
            <Button type="submit">추가</Button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
