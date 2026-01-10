import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>

      <p>Go to:</p>

      <ul>
        <li>
          <Link to="/about">About Page</Link>
        </li>
        <li>
          <Link to="/contact">Contact Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
