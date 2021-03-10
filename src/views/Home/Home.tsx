import { useStore, useReducer } from "@/utils/glass/store";

const Home = () => {
  const home = useStore("home");
  const changeHome = useReducer("home.changeHome");

  return (
    <div>
      {home ? <h2>I'm Home</h2> : <h2>I'm Not Home</h2>}
      <button onClick={changeHome}>Change Home</button>
    </div>
  );
};

export default Home;
