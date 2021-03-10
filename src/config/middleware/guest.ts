import { MiddlwareContext } from "../../utils/glass/router";
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from "../constants";

const guest = ({ next }: MiddlwareContext) => {
    if (!localStorage.getItem(TOKEN_STORAGE_KEY) || !localStorage.getItem(USER_STORAGE_KEY)) {
		return next();
	}

    return next({ name: "home" });
}

export default guest;
