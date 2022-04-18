import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  LoginRoute,
  SignupRoute,
  VerifyEmail,
  ResetPassword,
  ProfileRoute,
  SettingsRoute,
} from "./routes/User";
import { NoPageRoute } from "./routes/404";
import { MainRoutes } from "./routes/MainRoutes";

import Layout from "./components/Layout/Layout";
import Spinner from "./components/Spinner/Spinner";
import ScrollToTop from "./components/ScrollToTop";

export default function Main() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/login">
          <LoginRoute />
        </Route>

        <Route path="/signup">
          <SignupRoute />
        </Route>

        <Route path="/verify-email">
          <VerifyEmail />
        </Route>

        <Route path="/reset-password">
          <ResetPassword />
        </Route>

        <Route path="/profile">
          <ProfileRoute />
        </Route>

        <Route path="/settings">
          <SettingsRoute />
        </Route>

        <Layout>
          <Suspense fallback={<Spinner />}>
            <MainRoutes />
          </Suspense>
        </Layout>

        <Route>
          <NoPageRoute />
        </Route>
      </Switch>
    </Router>
  );
}
