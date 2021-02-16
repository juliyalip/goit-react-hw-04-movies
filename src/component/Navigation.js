import { NavLink } from "react-router-dom";

const Navigation = () => (
  <ul>
    <li>
      <NavLink exact to="/" className="baseNav" activeClassName="activeNav">
        Home
      </NavLink>{" "}
    </li>
    <li>
      <NavLink
        exact
        to="/movies"
        className="baseNav"
        activeClassName="activeNav"
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
