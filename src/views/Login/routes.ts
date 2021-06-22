import Login from "./Login";
import guest from "../../config/middleware/guest";
import { Route } from "glass-router/dist/@types/router";

const routes: Route[] = [
	{
		path: "/",
		exact: true,
		redirect: "/auth/login",
	},
	{
		path: "/auth/login",
		component: Login,
		name: "login",
		meta: {
			middleware: [guest],
		},
	},
];

export default routes;
