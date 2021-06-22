import { MiddlwareContext } from "glass-router/dist/@types/route";
import { hasAuth } from "../../utils/User";

const auth = ({ next }: MiddlwareContext) => {
	if (hasAuth()) {
		return next();
	}

	return next({ name: "login" });
}

export default auth;
