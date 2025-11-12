import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Logo"
            className="h-9 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-2xl font-semibold text-slate-800 dark:text-white">
            Blog
          </span>
        </Link>

        {/* Nav Buttons */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-5 py-2.5 text-sm font-medium rounded-xl shadow-sm transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/create"
            className={({ isActive }) =>
              `px-5 py-2.5 text-sm font-medium rounded-xl shadow-sm transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "bg-teal-100 text-indigo-700 hover:bg-teal-200"
              }`
            }
          >
            Create
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
