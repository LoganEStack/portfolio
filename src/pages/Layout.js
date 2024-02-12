import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" className={({ isActive }) => isActive ? "nav_active" : ""}>Home</NavLink>
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

      <Outlet />
    </>
  )
};

export default Layout;