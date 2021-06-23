import { Route } from "glass-router/dist/@types/router";
import auth from "@/config/middleware/auth";
import Dashboard from "./Dashboard";
import Reports from "./Reports";

const routes: Route[] = [
  {
    path: "/dashboard",
    component: Dashboard,
    name: "dashboard",
    exact: true,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/dashboard/reports",
    component: Reports,
    name: "reports",
    meta: {
      middleware: [auth],
    },
  },
];

export default routes;
