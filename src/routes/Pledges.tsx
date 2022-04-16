import { Switch, Route, useRouteMatch } from "react-router-dom";
import Pledges from "../pages/Pledge";
import Pledge from "../pages/Pledge/Pledge";

export function PledgeRoute() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/:slug`}>
        <Pledge />
      </Route>

      <Route path={`${path}`}>
        <Pledges />
      </Route>
    </Switch>
  );
}

export { PledgeRoute as default } from "./Pledges";
