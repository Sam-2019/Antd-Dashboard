import Login from "../pages/User/Login";
import Signup from "../pages/User/Signup";
import VerifyEmail from "../pages/User/Verify Email";
import ResetPassword from "../pages/User/Reset Password";

export function LoginRoute() {
  return <Login />;
}

export function SignupRoute() {
  return <Signup />;
}

export function VerifyEmailRoute() {
  return <VerifyEmail />;
}

export function ResetPasswordRoute() {
  return <ResetPassword />;
}

export { LoginRoute as default } from "./User";
export { SignupRoute as Signup } from "./User";
export { VerifyEmailRoute as VerifyEmail } from "./User";
export { ResetPasswordRoute as ResetPassword } from "./User";