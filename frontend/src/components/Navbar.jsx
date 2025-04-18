import { Link, useNavigate } from "react-router-dom"; // ✅ Import fixed
import "./Navbar.css"; // optional if you want to style
const Navbar = () => {
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <img
              className="nsslogo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/90/NSS-symbol.jpeg"
              alt="NSS Logo"
            />
          </Link>
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/AboutUs">About</Link></li>
        <li><Link to="/Events">Events</Link></li>
        {isAdminLoggedIn ? (
          <>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><button onClick={handleLogout} className="btn btn-link">Logout</button></li>
          </>
        ) : (
          <li><Link to="/admin/login">Admin</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
