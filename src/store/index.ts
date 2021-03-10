import GlassX from "../utils/glass/store/index";
import PersistedState from "../utils/glass/store/persist";

// import store modules
import home from "./../views/Home/store";

const store = GlassX.store({
	modules: [home],
	plugins: [PersistedState],
	// a little more expensive, but prevents unnecessary re-renders. Classic give-and-take :-)
	compareState: true,
});

export default store;
