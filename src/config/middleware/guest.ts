import GlassX from "glassx";
import { MiddlwareContext } from "glass-router/dist/@types/route";

const guest = ({ next }: MiddlwareContext) => {
    if (!GlassX.get("hasAuth")) {
		return next();
	}

    return next({ name: "dashboard" });
}

export default guest;
