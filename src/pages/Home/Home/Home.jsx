/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Home.css";
import image from "../../../assets/food-1.jpg";
import { Link } from "react-router-dom";
import Chefs from "../../Chefs/Chefs";

const Home = () => {
  return (
    <div>
      <div className="title bg-slate-100 justify-around mt-10 ml-5 mr-5 rounded-lg p-10">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl font-serif font-semibold text-rose-900">
            It's not Just <br /> Food, It's an <br />
            <span className="text-6xl font-sans font-bold text-rose-600">
              Experience
            </span>
            <br />
            <span className="text-lg text-slate-700">
              We are the most fastest and favorite Chef <br /> delivery service
              all over the world. <br /> Search for your favourite Chef. <br />
            </span>
            <Link className="btn btn-secondary" to="/about">
              About
            </Link>
          </h1>
        </div>
        <div>
          <img className="rounded-lg" src={image} alt="" />
        </div>
      </div>
      <Chefs></Chefs>
    </div>
  );
};

export default Home;
