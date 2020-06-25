import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";

const Signup = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    query: "",
  });

  if (props.hasPosted) {
    return <Redirect to="/" />;
  }
  const { name, email, subject, message, query } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, email, subject, message, query });
    try {
      const res = await axios.post("/api/users/query", body, config);
      props.handleChange({
        hasPosted: true,
        alerts: [],
        name,
        email,
        subject,
        message,
        query,
      });
      props.handleChange({
        alerts: [{ type: "success", text: "Query Posted!!" }],
      });
      setTimeout(() => {
        props.handleChange({ alerts: [] });
      }, 3000);
      return <Redirect to="/" />;
    } catch (err) {
      console.log(err);
      const errors = err.response.data.errors;
      let errs = [];
      if (errors) {
        errors.forEach((error) => {
          errs.unshift({ type: "error", text: error.msg });
        });
      }
      props.handleChange({ alerts: errs });
      setTimeout(() => {
        props.handleChange({ alerts: [] });
      }, 3000);
    }

    return false;
  };

  return (
    <div className="containere">
      <form onSubmit={onSubmit} className="form">
        <h1>Post Your Query</h1>
        <label htmlFor="name">Name</label>
        <input
          onChange={onChange}
          placeholder="Enter your name"
          type="text"
          name="name"
          value={name}
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={onChange}
          placeholder="your@email.com"
          name="email"
        />
        <label htmlFor="subject">Subject</label>
        <textarea
          value={subject}
          onChange={onChange}
          placeholder="Enter the subject here"
          name="subject"
        />
        <label htmlFor="message">message</label>
        <textarea
          value={message}
          onChange={onChange}
          placeholder="Enter the message here"
          name="message"
        />
        <label htmlFor="query">Query</label>
        <textarea
          value={query}
          onChange={onChange}
          placeholder="Enter the query here"
          name="query"
        />

        <button className="btn btn-success" type="submit">
          POST
        </button>
      </form>
    </div>
  );
};

export default Signup;

// onClick={onSubmit}
