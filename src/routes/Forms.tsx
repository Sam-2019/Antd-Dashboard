import { Switch, Route, useRouteMatch } from "react-router-dom";
import Member from "../pages/Forms/Member";
import Sunday from "../pages/Forms/Sunday";
import TitheForm from "../pages/Forms/Tithe";
import Visitor from "../pages/Forms/Visitor";
import Forms from "../pages/Forms";
import Pledge from "../pages/Forms/Pledge";

export function FormsRoute() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/pledge`}>
        <Pledge />
      </Route>

      <Route path={`${path}/member`}>
        <Member />
      </Route>

      <Route path={`${path}/tithe`}>
        <TitheForm />
      </Route>

      <Route path={`${path}/visitor`}>
        <Visitor />
      </Route>

      <Route path={`${path}/sunday`}>
        <Sunday />
      </Route>

      <Route path={`${path}`}>
        <Forms />
      </Route>
    </Switch>
  );
}
