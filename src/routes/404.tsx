import { Switch, Route } from "react-router-dom";
import NoPage from "../pages/404/404";

export function NoPageRoute() {
  return (
    <Switch>
      <Route >
        <NoPage />
      </Route>
    </Switch>
  );
}
