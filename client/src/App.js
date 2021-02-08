import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/dashboard/index";
import Login from "./pages/login";
import NewTruck from "./pages/newTruck";
import Truck from "./pages/truck";
import Archives from "./pages/archives";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Nav />
          <Switch>
            <PrivateRoute exact path={["/", "/dashboard"]} component={Dashboard} />
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/newtruck" component={NewTruck} />
            <PrivateRoute exact path="/truck/:id" component={Truck} />
            <PrivateRoute exact path="/archives" component={Archives} />
            {/* <Route>
            <NoMatch />
          </Route> */}
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
