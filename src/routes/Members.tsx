import { Outlet } from "react-router-dom";

export function MemberRoute() {
  return <Outlet />;
}

export { MemberRoute as default } from "./Members";
