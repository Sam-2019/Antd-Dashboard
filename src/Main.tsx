import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import ScrollToTop from "./components/ScrollToTop";
import Spinner from "./components/Spinner/Spinner";

const FormsRoute = lazy(() => import("./routes/Forms"));
const ChapelsRoute = lazy(() => import("./routes/Forms"));
const MemberRoute = lazy(() => import("./routes/Members"));
const DepartmentRoute = lazy(() => import("./routes/Departments"));
const DashboardRoute = lazy(() => import("./routes/Dashboard"));
const NoPageRoute = lazy(() => import("./routes/404"));
const PledgeRoute = lazy(() => import("./routes/Pledges"));
const VisitorRoute = lazy(() => import("./routes/Visitors"));
const PaymentRoute = lazy(() => import("./routes/Payments"));

export default function Main() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/">
                <DashboardRoute />
              </Route>

              <Route path="/forms">
                <FormsRoute />
              </Route>

              <Route path="/pledges">
                <PledgeRoute />
              </Route>

              <Route path="/chapels">
                <ChapelsRoute />
              </Route>

              <Route path="/payments">
                <PaymentRoute />
              </Route>

              <Route path="/visitors">
                <VisitorRoute />
              </Route>

              <Route path="/members">
                <MemberRoute />
              </Route>

              <Route path="/departments">
                <DepartmentRoute />
              </Route>

              <Route>
                <NoPageRoute />
              </Route>
            </Switch>
          </Suspense>
        </Layout>
      </div>
    </Router>
  );
}
