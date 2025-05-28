import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <nav className="backdrop-blur-md border-b border-white/20 sticky top-0 z-50 shadow-md font-poppins bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/90/NSS-symbol.jpeg"
            alt="NSS Logo"
            className="w-12 h-12 rounded-full shadow-lg"
          />
        </Link>

        {/* Hamburger */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-9 h-9 focus:outline-none group"
          >
            <span
              className={`absolute h-0.5 w-full bg-black rounded transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 top-4" : "top-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-black rounded transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "top-4"
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-black rounded transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 bottom-4" : "bottom-2"
              }`}
            />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 items-center text-gray-800 font-medium text-lg">
          {["Home", "Team", "About", "Events"].map((item, index) => (
            <li key={index}>
              <Link
                to={item === "About" ? "/AboutUs" : `/${item === "Home" ? "" : item}`}
                className="hover:text-blue-600 transition-all duration-300"
              >
                {item}
              </Link>
            </li>
          ))}

          {isAdminLoggedIn ? (
            <>
              <li>
                <Link
                  to="/admin/dashboard"
                  className="hover:text-blue-600 transition-all duration-300"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-600 font-semibold hover:underline transition-all duration-300"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/admin/login"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              >
                Admin
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-3 text-gray-800 bg-white/70 backdrop-blur-md shadow-md rounded-b-lg">
          {["Home", "Team", "About", "Events"].map((item, index) => (
            <li key={index}>
              <Link
                to={item === "About" ? "/AboutUs" : `/${item === "Home" ? "" : item}`}
                className="block py-1 text-lg hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}

          {isAdminLoggedIn ? (
            <>
              <li>
                <Link
                  to="/admin/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1 text-lg hover:text-blue-600"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="text-red-600 font-semibold block py-1 text-lg"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/admin/login"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              >
                Admin
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;





// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("isAdminLoggedIn");
//     navigate("/admin/login");
//   };

//   return (
//     <nav className="backdrop-blur-md  border-b border-white/20 sticky top-0 z-50 shadow-lg font-poppins">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
//         {/* Logo + Branding */}
//         <Link to="/" className="flex items-center gap-3">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/9/90/NSS-symbol.jpeg"
//             alt="NSS Logo"
//             className="w-12 h-12 rounded-full shadow-lg"
//           />
//         </Link>

//         {/* Navigation Items */}
//         {/* <ul className="flex gap-6 items-center text-gray-800 font-medium text-lg"> */}
//         <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center text-gray-800 font-medium text-base sm:text-lg w-full sm:w-auto">

//           {["Home", "Team", "About", "Events"].map((item, index) => (
//             <li key={index}>
//               <Link
//                 to={item === "About" ? "/AboutUs" : `/${item === "Home" ? "" : item}`}
//                 className="transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-[0_5px_8px_rgba(0,0,0,0.4)]"
//               >
//                 <span className="inline-block transition-transform duration-300">
//                   {item}
//                 </span>
//               </Link>
//             </li>
//           ))}

//           {isAdminLoggedIn ? (
//             <>
//               <li>
//                 <Link
//                   to="/admin/dashboard"
//                   className="transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-[0_5px_8px_rgba(0,0,0,0.4)]"
//                 >
//                   <span className="inline-block transition-transform duration-300">
//                     Dashboard
//                   </span>
//                 </Link>
//               </li>
//               <li>
//                 <button
//                   onClick={handleLogout}
//                   className="text-red-600 font-semibold transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-[0_5px_8px_rgba(0,0,0,0.4)]"
//                 >
//                   Logout
//                 </button>
//               </li>
//             </>
//           ) : (
//             <li>
//               <Link
//                 to="/admin/login"
//                 className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-xl shadow-md transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
//               >
//                 Admin
//               </Link>
//             </li>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
