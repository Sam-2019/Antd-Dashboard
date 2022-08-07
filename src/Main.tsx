import { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  LoginRoute,
  SignupRoute,
  VerifyEmail,
  ResetPassword,
} from "./routes/User";
import { NoPageRoute } from "./routes/404";
import { MainRoutes } from "./routes/MainRoutes";
import Layout from "./components/Layout/Layout";
import Spinner from "./components/Spinner/Spinner";
import ScrollToTop from "./components/ScrollToTop";
import { isLoggedIn } from "./utils/toolkit/features/user/userSlice";
import Cookies from "js-cookie";

export default function Main() {
  const userState = useSelector((state: any) => state.user.loggedIn);
  console.log({ userState: userState });
  const dispatch = useDispatch();

  useEffect(() => {
    function updateState() {
      const token = Cookies.get("accessToken");
      if (token === "undefined") {
        return dispatch(isLoggedIn(false));
      }

      return dispatch(isLoggedIn(true));
    }

    updateState();
  }, [dispatch]);

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/signup">
          <SignupRoute />
        </Route>

        <Route path="/verify-email">
          <VerifyEmail />
        </Route>

        <Route path="/reset-password">
          <ResetPassword />
        </Route>

        <Route path="/login">
          <LoginRoute />
        </Route>

        <PrivateRoute>
          <MainApp />
        </PrivateRoute>

        <Route>
          <NoPageRoute />
        </Route>
      </Switch>
    </Router>
  );
}

const MainApp = () => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <MainRoutes />
      </Suspense>
    </Layout>
  );
};

function PrivateRoute({ children, ...rest }: any) {
  const userState = useSelector((state: any) => state.user.loggedIn);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userState ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
