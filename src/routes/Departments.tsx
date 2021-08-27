import { Switch, Route, useRouteMatch } from "react-router-dom";
import Department from "../pages/Department/DepartmentList";
import Departments from "../pages/Department";

export function DepartmentRoute() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:slug`}>
        <Department />
      </Route>

      <Route path={`${path}`}>
        <Departments />
      </Route>
    </Switch>
  );
}
