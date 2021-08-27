import { Switch, Route, useRouteMatch } from "react-router-dom";
import Chapel from "../pages/Chapel/List";
import Chapels from "../pages/Chapel";

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
