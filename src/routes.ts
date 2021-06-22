import { GlassRouter } from "glass-router";

import home from "./views/Home/routes";
import login from "./views/Login/routes";
import notFound from "./views/NotFound/routes";

const routes = [
  ...login,
  ...home,
  ...notFound,
];

GlassRouter.options({
  routes,
  middleware: true,
});
