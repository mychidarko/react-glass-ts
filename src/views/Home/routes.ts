import Home from "./Home";
import guest from "../../config/middleware/guest";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
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
