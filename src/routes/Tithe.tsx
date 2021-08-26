import { Switch, Route, useRouteMatch } from "react-router-dom";
import Tithe from "../pages/Tithe";
import TitheList from "../pages/Tithe/list";

export function TitheRoute() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:slug`}>
        <TitheList />
      </Route>

      <Route path={`${path}`}>
        <Tithe />
      </Route>
    </Switch>
  );
}
