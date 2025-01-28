import { NavLink } from "react-router-dom";

export default function Navigation() {

  return (
    <>
      <nav id="home-nav">
        <ul>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav_active" : ""}>About</NavLink>
          </li>
          <li>
            <NavLink to="/work" className={({ isActive }) => isActive ? "nav_active" : ""}>Work</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav_active" : ""}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/art" className={({ isActive }) => isActive ? "nav_active" : ""}>Art</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
};
