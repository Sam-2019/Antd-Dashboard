import Login from "../pages/User/Login";
import Signup from "../pages/User/Signup";
import VerifyEmail from "../pages/User/Verify Email";
import ResetPassword from "../pages/User/Reset Password";
import Profile from "../pages/User/Profile";
import Settings from "../pages/User/Settings";

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

export function ProfileRoute() {
  return <Profile />;
}

export function SettingsRoute() {
  return <Settings />;
}

export { LoginRoute as default } from "./User";
export { SignupRoute as Signup } from "./User";
export { VerifyEmailRoute as VerifyEmail } from "./User";
export { ResetPasswordRoute as ResetPassword } from "./User";
export { ProfileRoute as Profile } from "./User";
export { SettingsRoute as Settings } from "./User";
