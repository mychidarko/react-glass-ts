import { Route } from "glass-router/dist/@types/router";
import NotFound from "./NotFound";

const routes: Route[] = [
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
