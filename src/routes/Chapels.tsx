import { Switch, Route, useRouteMatch } from "react-router-dom";
import Chapels from "../pages/Chapel";
// import Chapel from "../pages/Chapel/List";

export function ChapelsRoute() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      {/* <Route path={`${path}/:slug`}>
        <Chapel />
      </Route> */}

      <Route path={`${path}`}>
        <Chapels />
      </Route>
    </Switch>
  );
}
