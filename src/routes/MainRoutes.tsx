import { lazy, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const FormsRoute = lazy(() => import("../routes/Forms"));
const ChapelsRoute = lazy(() => import("../routes/Forms"));
const MemberRoute = lazy(() => import("../routes/Members"));
const DepartmentRoute = lazy(() => import("../routes/Departments"));
const DashboardRoute = lazy(() => import("../routes/Dashboard"));
const PledgeRoute = lazy(() => import("../routes/Pledges"));
const VisitorRoute = lazy(() => import("../routes/Visitors"));
const PaymentRoute = lazy(() => import("../routes/Payments"));

export const MainRoutes = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};
