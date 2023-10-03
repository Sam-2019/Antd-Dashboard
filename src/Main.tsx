import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NoPage from "./pages/404";
import { Login, ResetPassword, Signup, VerifyEmail } from "./routes/User";
import AppLayout from "./components/Layout/Layout";
import DashboardRoute from "./routes/Dashboard";
import DepartmentRoute from "./routes/Departments";
import MemberRoute from "./routes/Members";
import VisitorRoute from "./routes/Visitors";
import PaymentRoute from "./routes/Payments";
import ChapelsRoute from "./routes/Chapels";
import PledgeRoute from "./routes/Pledges";
import FormsRoute from "./routes/Forms";
import Departments from "./pages/Departments";
import Department from "./pages/Departments/DepartmentList";
import Chapels from "./pages/Chapels";
import Chapel from "./pages/Chapels/ChapelList";
import Forms from "./pages/Forms";

import Member from "./pages/Forms/Member/index";
import Visitor from "./pages/Forms/Visitor/index";
import Pledge from "./pages/Forms/Pledge/index";
import Sunday from "./pages/Forms/Sunday/index";
import TypeOfService from "./pages/Forms/Sunday/Type";
import Payment from "./pages/Forms/Payments/index";
import PaymentType from "./pages/Forms/Payments/Type";

import Members from "./pages/Members/Members";
import Visitors from "./pages/Visitor/Visitors";
import Payments from "./pages/Payments";
import Pledges from "./pages/Pledge/Pledges";

export default function Main() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NoPage />,
    children: [
      { index: true, element: <DashboardRoute /> },
      {
        path: "/departments",
        element: <DepartmentRoute />,
        children: [
          { index: true, element: <Departments /> },
          { path: ":slug", element: <Department /> },
        ],
      },
      // { path: "/members", element: <MemberRoute /> },

      {
        path: "/members",
        element: <MemberRoute />,
        children: [
          { index: true, element: <Members /> },
          { path: ":slug", element: <Member /> },
        ],
      },

      // { path: "/visitors", element: <VisitorRoute /> },
      {
        path: "/visitors",
        element: <VisitorRoute />,
        children: [
          { index: true, element: <Visitors /> },
          { path: ":slug", element: <Member /> },
        ],
      },

      // { path: "/payments", element: <PaymentRoute /> },

      {
        path: "/payments",
        element: <PaymentRoute />,
        children: [
          { index: true, element: <Payments /> },
          { path: ":slug", element: <Member /> },
        ],
      },
      {
        path: "/chapels",
        element: <ChapelsRoute />,
        children: [
          { index: true, element: <Chapels /> },
          { path: ":slug", element: <Chapel /> },
        ],
      },

      // { path: "/pledges", element: <PledgeRoute /> },
      {
        path: "/pledges",
        element: <PledgeRoute />,
        children: [
          { index: true, element: <Pledges /> },
          { path: ":slug", element: <Member /> },
        ],
      },
      {
        path: "/forms",
        element: <FormsRoute />,
        children: [
          { index: true, element: <Forms /> },
          { path: "member", element: <Member /> },
          { path: "visitor", element: <Visitor /> },
          { path: "pledge", element: <Pledge /> },
          { path: "sunday", element: <Sunday /> },
          { path: "payments", element: <Payment /> },
          { path: "sunday/:slug", element: <TypeOfService /> },
          { path: "payments/:slug", element: <PaymentType /> },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "verify-password",
    element: <VerifyEmail />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
]);
