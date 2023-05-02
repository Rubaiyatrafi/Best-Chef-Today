/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./Chefs.css";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <div className="chefs">
        {chefs.map((chef) => (
          <div className="chef">
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
            <button className="btn btn-outline btn-secondary mt-4 w-full">
              View Recipes{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
