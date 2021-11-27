import { Switch, Route, useRouteMatch } from "react-router-dom";
import Member from "../pages/Members/Member";
import Members from "../pages/Members";

export function MemberRoute() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/:slug`}>
        <Member />
      </Route>

      <Route path={`${path}`}>
        <Members />
      </Route>
    </Switch>
  );
}

export { MemberRoute as default } from "./Members";