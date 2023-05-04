import React, { useContext } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/5493254.jpg";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <nav className="navbar mt-10 md:flex-row space-x-40 justify-center flex-col">
        <div>
          <img className="w-12 rounded-lg" src={logo} alt="" />
          <h2 className="ml-2 text-5xl font-bold font-serif text-blue-950 title-name">
            Best <span className="text-rose-700">Chef</span> Today
          </h2>
        </div>
        <div className="text-2xl font-bold font-serif  md:flex-row flex-col link-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/recipe">Recipe</NavLink>
          {user ? (
            <>
              <h2>{user.displayname}</h2>
              <NavLink>
                <button onClick={handleLogout}>Sign Out</button>
              </NavLink>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
