import { GlassRouter } from "glass-router";

import dashboard from "./views/Dashboard/routes";
import login from "./views/Login/routes";
import notFound from "./views/NotFound/routes";

const routes = [
  ...login,
  ...dashboard,
  ...notFound,
];

GlassRouter.options({
  routes,
  middleware: true,
});
