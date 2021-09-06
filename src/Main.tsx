import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import { FormsRoute } from "./routes/Forms";
import { ChapelsRoute } from "./routes/Chapels";
import { MemberRoute } from "./routes/Members";
import { DepartmentRoute } from "./routes/Departments";
import { DashboardRoute } from "./routes/Dashboard";
import { NoPageRoute } from "./routes/404";
import { PledgeRoute } from "./routes/Pledges";
import { VisitorRoute } from "./routes/Visitors";
import { PaymentRoute } from "./routes/Payments";
import ScrollToTop from "./components/ScrollToTop";

export default function Main() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Layout>
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
        </Layout>
      </div>
    </Router>
  );
}
