import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect
} from "react-router-dom";

import Fees3 from './pages/Fees3';

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/fees-3">
            <Fees3 />
          </Route>
          <Route path="/">
            <Redirect to="/fees-3" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
