import { Link } from "react-router-dom";

const Header = () => {
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
            <Link className="headerLink" to="post">
              Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
