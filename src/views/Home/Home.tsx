import { useStore } from "@/utils/glass/store";
import GlassX from "@/utils/glass/store";

const Home = () => {
  const home = useStore("home");

  setTimeout(() => {
    GlassX.set({ home: !home });
  }, 5000);

  return home ? <h2>Home</h2> : <h2>Not Home</h2>;
};

export default Home;
