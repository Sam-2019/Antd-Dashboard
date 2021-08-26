import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "antd/dist/antd.css";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Departments from "./pages/Department/Departments";
import Members from "./pages/Member/Members";
import Member from "./pages/Member/Member";
import Tithe from "./pages/Tithe/Tithe";
import Chapels from "./pages/Chapel/Chapels";
import Chapel from "./pages/Chapel/Chapel";
import TithePaid from "./pages/Tithe/TithePaid";
import Department from "./pages/Department/Department";
import Forms from "./components/Forms/Forms";
import Sunday from "./components/Forms/Sunday";
import Visitor from "./components/Forms/Visitor";
import TitheForm from "./components/Forms/Tithe";
import MemberForm from "./components/Forms/Member";

export default function App() {
  return (
    <Router>
      <div>
        <Layout>
          <div
        
          >
            <Switch>
              <Route path="/forms/member">
                <MemberForm />
              </Route>
              <Route path="/forms/tithe">
                <TitheForm />
              </Route>
              <Route path="/forms/visitor">
                <Visitor />
              </Route>
              <Route path="/forms/sunday">
                <Sunday />
              </Route>
              <Route path="/forms">
                <Forms />
              </Route>
              <Route path="/chapels/:slug">
                <Chapel />
              </Route>
              <Route path="/chapels">
                <Chapels />
              </Route>
              <Route path="/tithe/:slug">
                <TithePaid />
              </Route>
              <Route path="/tithe">
                <Tithe />
              </Route>
              <Route path="/members/:slug">
                <Member />
              </Route>
              <Route path="/members">
                <Members />
              </Route>
              <Route path="/departments/:slug">
                <Department />
              </Route>
              <Route path="/departments">
                <Departments />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
    </Router>
  );
}
