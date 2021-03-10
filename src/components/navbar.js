import { NavLink } from "react-router-dom";
const NavBar = (props) => {
  return (
    <ul className="top-menu">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/book-edit">Book Editor</NavLink></li>
    </ul>
  )
}

export default NavBar;
