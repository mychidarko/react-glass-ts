import Dashboard from "./Dashboard";
import { Route } from "glass-router/dist/@types/router";
import auth from "@/config/middleware/auth";

const routes: Route[] = [
  {
    path: "/dashboard",
    component: Dashboard,
    name: "dashboard",
    meta: {
      middleware: [auth],
    },
  },
];

export default routes;
