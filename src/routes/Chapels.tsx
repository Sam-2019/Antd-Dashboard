import { Switch, Route, useRouteMatch } from "react-router-dom";
import Chapel from "../pages/Chapel/Chapel";
import Chapels from "../pages/Chapel/Chapels";

export function ChapelsRoute() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/:slug`}>
        <Chapel />
      </Route>

      <Route path={`${path}`}>
        <Chapels />
      </Route>
    </Switch>
  );
}
