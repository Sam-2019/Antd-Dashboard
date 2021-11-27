import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";
import Payments from "../pages/Payments/index";
import PaymentType from "../pages/Payments/Type";
import PaymentPeriod from "../pages/Payments/Period";
import { pathSnippetsWithFilter } from "../utils/functions";

export function PaymentRoute() {
  let { path } = useRouteMatch();
  let location = useLocation();

  const routeData = pathSnippetsWithFilter(location);

  return (
    <Switch>
      <Route path={`${path}/${routeData[1]}/:slug`}>
        <PaymentType />
      </Route>

      <Route path={`${path}/:slug`}>
        <PaymentPeriod />
      </Route>

      <Route path={`${path}`}>
        <Payments />
      </Route>
    </Switch>
  );
}

export { PaymentRoute as default } from "./Payments";