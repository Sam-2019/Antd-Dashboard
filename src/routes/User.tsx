import Login from "../pages/User/Login";
import Signup from "../pages/User/Signup";

export function LoginRoute() {
  return <Login />;
}

export function SignupRoute() {
  return <Signup />;
}

export { LoginRoute as default } from "./User";
export { SignupRoute as Signup } from "./User";
