import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Home } from '../assets/images/home.svg'

export default function Navigation() {
  const location = useLocation();
  const isAboutPage = location.pathname !== "/";

  return (
    <>
      <nav className={(isAboutPage ? 'nav_color navbar_top' : '')}>
        <ul>
          <li>
            <NavLink exact to="/" className={({ isActive }) => isActive ? "nav_active" : ""}>
              <Home width="3rem" height="auto" style={{"display":"block"}} />
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about" className={({ isActive }) => isActive ? "nav_active" : ""}>About</NavLink>
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
