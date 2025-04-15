// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css"; // optional if you want to style

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/">
          <img class="nsslogo" src="https://upload.wikimedia.org/wikipedia/commons/9/90/NSS-symbol.jpeg"></img>
          </Link>
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/AboutUs">About</Link></li>
        <li><Link to="/Events">Events</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
