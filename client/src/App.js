import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/dashboard/index";
import NewTruck from "./pages/newTruck";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/dashboard"]}>
            <Dashboard />
          </Route>
          <Route exact path="/newtruck">
            <NewTruck />
          </Route>
          {/* <Route exact path="/trucks/:id">
            <Detail />
          </Route> */}
          {/* <Route>
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
