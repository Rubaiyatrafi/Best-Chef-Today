import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/5493254.jpg";

const Header = () => {
  return (
    <div>
      <nav className="navbar m-5 flex">
        <div>
          <img className="w-12 rounded-lg m-3" src={logo} alt="" />
          <h2 className="m-2 text-5xl font-bold font-serif text-blue-950">
            Best <span className="text-rose-700">Chef</span> Today
          </h2>
        </div>
        <div className="text-2xl ml-40 font-bold font-serif">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/recipe">Recipe</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
