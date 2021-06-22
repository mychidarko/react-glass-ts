import { GlassRouter } from "glass-router";

import home from "./views/Home/routes";
import notFound from "./views/NotFound/routes";

const routes = [
  ...home,
  ...notFound,
];

GlassRouter.options({
  routes,
  middleware: true,
});
