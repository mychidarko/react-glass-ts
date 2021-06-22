import Home from "./Home";
import guest from "../../config/middleware/guest";
import { Route } from "glass-router/dist/@types/router";

const routes: Route[] = [
  {
    path: "/",
    exact: true,
    component: Home,
    name: "home",
    meta: {
      middleware: [guest],
    },
  },
];

export default routes;
