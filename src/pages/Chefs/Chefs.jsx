/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./Chefs.css";
import { Link } from "react-router-dom";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://best-chef-today-server-rubaiyatrafi.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <hr className="mt-10" />
      <div className="mt-10">
        <h1 className="text-center text-6xl font-semibold text-sky-600">
          Here some of our best Chefs <br />{" "}
          <span className="text-2xl text-sky-500">
            You can see there details at a glance
          </span>
        </h1>
      </div>
      <hr className="mt-10" />
      <div className="chefs">
        {chefs.map((chef) => (
          <div className="chef" key={chef.id}>
            <img className="chef-img" src={chef.chef_picture} alt="" />
            <h1 className="text-3xl font-sans font-bold text-orange-500 mt-5">
              {chef.chef_name}
            </h1>
            <p className="text-cyan-600 font-mono font-semibold mt-5">
              Experience:{" "}
              <span className="font-bold text-red-500">
                {chef.years_of_experience}
              </span>{" "}
              years
            </p>
            <p className="text-cyan-600 font-mono font-semibold mt-2">
              Recipe:{" "}
              <span className="font-bold text-red-600">
                {chef.number_of_recipes}
              </span>
            </p>
            <p className="like mt-2 font-mono">
              <FaHeart className="text-red-600 mr-3"></FaHeart> {chef.likes}
            </p>
            <Link to={`/chef/${chef.id}`} chef={chef}>
              <button className="btn btn-outline btn-secondary mt-4">
                View Recipes{" "}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
