import state from "./state";
import * as reducers from "./reducers";

const store = {
	namespace: "login",
	state,
	reducers,
};

export default store;
