import { Switch, Route, useRouteMatch } from "react-router-dom";
import Visitor from "../pages/Visitor/Visitor";
import Visitors from "../pages/Visitor";

export function VisitorRoute() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/:slug`}>
        <Visitor />
      </Route>

      <Route path={`${path}`}>
        <Visitors />
      </Route>
    </Switch>
  );
}
