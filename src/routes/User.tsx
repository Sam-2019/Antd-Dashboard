import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/User/Login";
import Signup from "../pages/User/Signup";

export function LoginRoute() {
  return (
    <Switch>
      <Route path={`login`}>
        <Login />
      </Route>
    </Switch>
  );
}

export function SignupRoute() {
  return (
    <Switch>
      <Route path={`signup`}>
        <Signup />
      </Route>
    </Switch>
  );
}

export { LoginRoute as default } from "./User";
export { SignupRoute as Signup } from "./User";
