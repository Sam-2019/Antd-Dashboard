import { Switch, Route, useRouteMatch } from "react-router-dom";
import Pledges from "../pages/Pledge";

export function PledgeRoute() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`}>
        <Pledges />
      </Route>
    </Switch>
  );
}
