import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Welcome = (props) => {
  const [collapse, setCollapse] = useState(true);

  let styles = {};

  if (collapse) {
    styles = {
      display: "none",
    };
  } else {
    styles = {};
  }

  const toggle = () => {
    setCollapse(!collapse);
  };

  const { name, email, query, subject, message } = props;
  return (
    <div style={{ textAlign: "center" }} className="containere">
      <div style={{ minHeight: "400px" }} className="form login">
        <h1>Welcome {props.name}!</h1>
        <h4>Your query has been submitted successfully!</h4>
        <p>Do you want to view your query?</p>
        <button onClick={toggle} className="btn btn-outline-dark">
          {collapse ? "SHOW" : "HIDE"}
        </button>
        <div
          style={{
            ...styles,
            border: "1px solid black",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "left",
          }}
        >
          <div>
            <label style={{ color: "gray", fontSize: "12px" }}>Subject</label>
            <br></br>
            <span>{subject ? subject : "Empty Field"}</span>
          </div>
          <div>
            <label style={{ color: "gray", fontSize: "12px" }}>Message</label>
            <br></br>

            <span>{message ? message : "Empty Field"}</span>
          </div>
          <div>
            <label style={{ color: "gray", fontSize: "12px" }}>Query</label>
            <br></br>

            <span>{query ? query : "Empty Field"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
