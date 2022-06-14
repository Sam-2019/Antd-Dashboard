import { Switch, Route, useRouteMatch } from "react-router-dom";
import Settings from "../pages/User/Settings/index";

export function SettingsRoute() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`}>
        <Settings />
      </Route>
    </Switch>
  );
}

export { SettingsRoute as default } from "./Settings";
