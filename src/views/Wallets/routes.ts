import { Route } from "glass-router/dist/@types/router";
import auth from "@/config/middleware/auth";
import Rates from "./Rates";
import NetworkWallet from "./NetworkWallet";

const routes: Route[] = [
  {
    path: "/rates",
    component: Rates,
    name: "rates",
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/wallets/network",
    component: NetworkWallet,
    name: "net-wallets",
    meta: {
      middleware: [auth],
    },
  },
];

export default routes;
