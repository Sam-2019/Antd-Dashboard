import { lazy, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";

const FormsRoute = lazy(() => import("../routes/Forms"));
const ChapelsRoute = lazy(() => import("../routes/Chapels"));
const MemberRoute = lazy(() => import("../routes/Members"));
const DepartmentRoute = lazy(() => import("../routes/Departments"));
const DashboardRoute = lazy(() => import("../routes/Dashboard"));
const PledgeRoute = lazy(() => import("../routes/Pledges"));
const VisitorRoute = lazy(() => import("../routes/Visitors"));
const PaymentRoute = lazy(() => import("../routes/Payments"));
const ProfileRoute = lazy(() => import("../routes/Profile"));
const SettingsRoute = lazy(() => import("../routes/Settings"));

export const MainRoutes = () => {
  let { path } = useRouteMatch();
  return (
    <Fragment>
      <Route exact path={`${path}`}>
        <DashboardRoute />
      </Route>

      <Route path={`${path}/forms`}>
        <FormsRoute />
      </Route>

      <Route path={`${path}/pledges`}>
        <PledgeRoute />
      </Route>

      <Route path={`${path}/chapels`}>
        <ChapelsRoute />
      </Route>

      <Route path={`${path}/payments`}>
        <PaymentRoute />
      </Route>

      <Route path={`${path}/visitors`}>
        <VisitorRoute />
      </Route>

      <Route path={`${path}/members`}>
        <MemberRoute />
      </Route>

      <Route path={`${path}/departments`}>
        <DepartmentRoute />
      </Route>

      <Route path={`${path}/profile`}>
        <ProfileRoute />
      </Route>

      <Route path={`${path}/settings`}>
        <SettingsRoute />
      </Route>
    </Fragment>
  );
};
