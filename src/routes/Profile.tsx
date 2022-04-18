import { Switch, Route, useRouteMatch } from "react-router-dom";
import Profile from "../pages/User/Profile";

export function ProfileRoute() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`}>
        <Profile />
      </Route>
    </Switch>
  );
}

export { ProfileRoute as default } from "./Profile";