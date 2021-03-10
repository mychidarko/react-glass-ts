import { Link } from "react-router-dom";
import { useTitle } from "../../utils/hooks";

const Home = () => {
  useTitle("I'm lost");

  return (
    <div className="flex flex:center-all" style={{ height: "100vh" }}>
      <div className="px:_3 py:_5" style={{ width: "50%" }}>
        <h1 className="mb:_2">You seem to be lost</h1>
        <p>
          We couldn't find the page you requested. Please check the link and try again or
          <Link to="/">go back home</Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
