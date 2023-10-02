import { lazy } from "react";

const DashboardRoute = lazy(() => import("../routes/Dashboard"));

export const MainRoutes = () => {
  return <DashboardRoute />;
};
