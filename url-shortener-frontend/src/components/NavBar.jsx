import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

import { useStoreContext } from "../contextApi/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();

  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020B1F]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto lg:px-10 sm:px-8 px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            trim<span className="text-blue-500">Url.com</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-10">
          <li>
            <Link
              className={`transition text-sm font-medium ${
                path === "/"
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={`transition text-sm font-medium ${
                path === "/about"
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
              to="/about"
            >
              About
            </Link>
          </li>

          {token && (
            <li>
              <Link
                className={`transition text-sm font-medium ${
                  path === "/dashboard"
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}

          {!token ? (
            <Link to="/register">
              <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-full text-sm font-semibold text-white">
                Sign Up
              </button>
            </Link>
          ) : (
            <button
              onClick={onLogOutHandler}
              className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-full text-sm font-semibold text-white"
            >
              Logout
            </button>
          )}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden text-white"
        >
          {navbarOpen ? (
            <RxCross2 className="text-3xl" />
          ) : (
            <IoIosMenu className="text-4xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          navbarOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-5 py-5 bg-[#081225] border-t border-white/10">
          <ul className="flex flex-col gap-5">
            <li>
              <Link
                onClick={() => setNavbarOpen(false)}
                className={`block text-sm font-medium ${
                  path === "/"
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setNavbarOpen(false)}
                className={`block text-sm font-medium ${
                  path === "/about"
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                to="/about"
              >
                About
              </Link>
            </li>

            {token && (
              <li>
                <Link
                  onClick={() => setNavbarOpen(false)}
                  className={`block text-sm font-medium ${
                    path === "/dashboard"
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}

            {!token ? (
              <Link to="/register">
                <button className="w-full bg-blue-500 hover:bg-blue-600 transition py-3 rounded-xl text-white font-semibold">
                  Sign Up
                </button>
              </Link>
            ) : (
              <button
                onClick={onLogOutHandler}
                className="w-full bg-red-500 hover:bg-red-600 transition py-3 rounded-xl text-white font-semibold"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;