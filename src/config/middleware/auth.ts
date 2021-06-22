import GlassX from "glassx";
import { MiddlwareContext } from "glass-router/dist/@types/route";

const auth = ({ next }: MiddlwareContext) => {
	if (GlassX.get("hasAuth")) {
		return next();
	}

	return next({ name: "login" });
}

export default auth;
