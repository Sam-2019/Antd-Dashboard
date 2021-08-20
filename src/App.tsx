import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "antd/dist/antd.css";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Department from "./pages/Department";
import Members from "./pages/Members";
import Member from "./pages/Member";

export default function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Switch>
            <Route path="/members/:slug">
              <Member />
            </Route>
            <Route path="/members">
              <Members />
            </Route>
            <Route path="/department">
              <Department />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}
