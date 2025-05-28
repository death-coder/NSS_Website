import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <nav className="backdrop-blur-md  border-b border-white/20 sticky top-0 z-50 shadow-lg font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo + Branding */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/90/NSS-symbol.jpeg"
            alt="NSS Logo"
            className="w-12 h-12 rounded-full shadow-lg"
          />
          <span className="text-2xl font-semibold text-gray-800 tracking-wide drop-shadow-lg">
            NSS IIT Mandi
          </span>
        </Link>

        {/* Navigation Items */}
        <ul className="flex gap-6 items-center text-gray-800 font-medium text-lg">
          {["Home", "Team", "About", "Events"].map((item, index) => (
            <li key={index}>
              <Link
                to={item === "About" ? "/AboutUs" : `/${item === "Home" ? "" : item}`}
                className="transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-[0_5px_8px_rgba(0,0,0,0.4)]"
              >
                <span className="inline-block transition-transform duration-300">
                  {item}
                </span>
              </Link>
            </li>
          ))}

          {isAdminLoggedIn ? (
            <>
              <li>
                <Link
                  to="/admin/dashboard"
                  className="transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-[0_5px_8px_rgba(0,0,0,0.4)]"
                >
                  <span className="inline-block transition-transform duration-300">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-600 font-semibold transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-[0_5px_8px_rgba(0,0,0,0.4)]"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/admin/login"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-xl shadow-md transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                Admin Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
