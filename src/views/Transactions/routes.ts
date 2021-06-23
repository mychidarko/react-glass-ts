import { Route } from "glass-router/dist/@types/router";
import auth from "@/config/middleware/auth";
import Transactions from "./Transactions";
import Transaction from "./Transaction";

const routes: Route[] = [
  {
    path: "/transactions",
    exact: true,
    component: Transactions,
    name: "transactions",
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/transactions/:id",
    component: Transaction,
    name: "transaction",
    meta: {
      middleware: [auth],
    },
  },
];

export default routes;
