import { Switch, Route, useRouteMatch } from "react-router-dom";

import Forms from "../pages/Forms";
import Member from "../pages/Forms/Member/index";
import Visitor from "../pages/Forms/Visitor/index";
import Pledge from "../pages/Forms/Pledge/index";
import Sunday from "../pages/Forms/Sunday/index";
import TypeOfService from "../pages/Forms/Sunday/Type";
import Payment from "../pages/Forms/Payments/index";
import PaymentType from "../pages/Forms/Payments/Type";

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

      <Route path={`${path}/payments/:slug`}>
        <PaymentType />
      </Route>

      <Route path={`${path}/payments`}>
        <Payment />
      </Route>

      <Route path={`${path}/visitor`}>
        <Visitor />
      </Route>

      <Route path={`${path}/sunday/:slug`}>
        <TypeOfService />
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

export { FormsRoute as default } from "./Forms";
