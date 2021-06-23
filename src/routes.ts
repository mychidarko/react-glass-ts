import { GlassRouter } from "glass-router";

import dashboard from "./views/Dashboard/routes";
import login from "./views/Login/routes";
import wallets from "./views/Wallets/routes";
import transactions from "./views/Transactions/routes";
import notFound from "./views/NotFound/routes";

const routes = [
  ...login,
  ...dashboard,
  ...wallets,
  ...transactions,
  ...notFound,
];

GlassRouter.options({
  routes,
  middleware: true,
});
