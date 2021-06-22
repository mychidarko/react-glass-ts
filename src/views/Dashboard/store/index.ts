import state from "./state";
import * as reducers from "./reducers";

const store = {
	namespace: "dashboard",
	state,
	reducers,
};

export default store;
