import { Switch, Route, useRouteMatch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export function DashboardRoute() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`}>
        <Dashboard />
      </Route>
    </Switch>
  );
}
