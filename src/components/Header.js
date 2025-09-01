import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCount, increaseCount } from "../features/posts/postsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);
  return (
    <header className="header">
      <Link className="headerLink" to="/">
        <h1>Redux Blog</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <Link className="headerLink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="headerLink" to="user">
              User
            </Link>
          </li>
          <li>
            <Link className="headerLink" to="post">
              Post
            </Link>
          </li>
        </ul>
        <button onClick={() => dispatch(increaseCount())}>{count}</button>
      </nav>
    </header>
  );
};

export default Header;
