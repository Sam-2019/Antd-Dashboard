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

import MemberForm from "./pages/Forms/Member/index";
import VisitorForm from "./pages/Forms/Visitor/index";
import PledgeForm from "./pages/Forms/Pledge/index";
import SundayForm from "./pages/Forms/Sunday/index";
import SundaysForm from "./pages/Forms/Sunday/Type";
import PaymentForm from "./pages/Forms/Payments/index";
import PaymentsForm from "./pages/Forms/Payments/Type";

import Members from "./pages/Members/Members";
import Visitors from "./pages/Visitor/Visitors";
import Payments from "./pages/Payments";
import Pledges from "./pages/Pledge/Pledges";

import Member from "./pages/Members/Member";
import Visitor from "./pages/Visitor/Visitor";
import Pledge from "./pages/Pledge/Pledge";

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
          { path: ":slug", element: <Visitor /> },
        ],
      },
      // { path: "/payments", element: <PaymentRoute /> },
      {
        path: "/payments",
        element: <PaymentRoute />,
        children: [
          { index: true, element: <Payments /> },
          { path: ":slug", element: <Pledge /> },
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
          { path: ":slug", element: <Pledge /> },
        ],
      },
      {
        path: "/forms",
        element: <FormsRoute />,
        children: [
          { index: true, element: <Forms /> },
          { path: "member", element: <MemberForm /> },
          { path: "visitor", element: <VisitorForm /> },
          { path: "pledge", element: <PledgeForm /> },
          { path: "sunday", element: <SundayForm /> },
          { path: "payments", element: <PaymentForm /> },
          { path: "sunday/:slug", element: <SundaysForm /> },
          { path: "payments/:slug", element: <PaymentsForm /> },
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
