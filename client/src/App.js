import React from "react";
// import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import QueryForm from "./Components/Signup";
import Alert from "./Components/Alert";
import "./Styles/styles.css";
import PrivateRoute from "./Components/PrivateRoute";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      query: "",
      alerts: [],
      hasPosted: false,
    };
  }

  // componentDidUpdate() {
  //   if (this.state.hasPosted) {
  //     return <Redirect to="/" />;
  //   }
  // }

  handleChange = (stateUpdate) => {
    this.setState({ ...stateUpdate });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Alert alerts={this.state.alerts} />
          <Switch>
            <Route
              path="/create"
              render={(props) => (
                <QueryForm
                  {...props}
                  handleChange={this.handleChange}
                  hasPosted={this.state.hasPosted}
                />
              )}
            />
            <PrivateRoute
              exact
              path="/"
              name={this.state.name}
              email={this.state.email}
              subject={this.state.subject}
              message={this.state.message}
              query={this.state.query}
              handleChange={this.handleChange}
              hasPosted={this.state.hasPosted}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
