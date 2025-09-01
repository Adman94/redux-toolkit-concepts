import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";

const UsersList = () => {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map((user) => (
    <li key={user.id}>
      <Link className="headerLink" to={`/user/${user.id}`}>
        {user.name}
      </Link>
    </li>
  ));

  const userListStyles = {
    h2: {
      color: "hsla(189, 100%, 69%, 0.75)",
    },
    ul: {
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <section>
      <h2 style={userListStyles.h2}>Users</h2>

      <ul style={userListStyles.ul}>{renderedUsers}</ul>
    </section>
  );
};

export default UsersList;
