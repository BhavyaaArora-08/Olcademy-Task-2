import React from "react";
import { Route, Redirect } from "react-router-dom";
import Welcome from "./Welcome";

const PrivateRoute = (props) => {
  return (
    <div>
      <Route
        render={(p) =>
          !props.hasPosted ? (
            <Redirect to="/create" />
          ) : (
            <Welcome
              handleChange={props.handleChange}
              name={props.name}
              name={props.name}
              email={props.email}
              subject={props.subject}
              message={props.message}
              query={props.query}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
