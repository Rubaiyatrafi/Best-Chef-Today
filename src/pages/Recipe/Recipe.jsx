import React from "react";
import cap from "../../assets/cap.jpg";
import pan from "../../assets/pan.jpg";
import brash from "../../assets/brash.jpg";
import las from "../../assets/las.jpg";
import "./Recipe.css";

const Recipe = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl text-violet-700 mt-10">
        Here we give some speicial Recipe
      </h1>
      <div className="chefs">
        <div className="rcp-details">
          <h1 className="text-3xl font-bold text-blue-900 m-5">
            Caprese salad
          </h1>
          <img className="recipe-img m-5" src={cap} alt="" />
        </div>
        <div className="rcp-details">
          <h1 className="text-3xl font-bold text-blue-900 m-5">Panzenella</h1>
          <img className="recipe-img m-5" src={pan} alt="" />
        </div>
        <div className="rcp-details">
          <h1 className="text-3xl font-bold text-blue-900 m-5">Bruschetta</h1>
          <img className="recipe-img m-5" src={brash} alt="" />
        </div>
        <div className="rcp-details">
          <h1 className="text-3xl font-bold text-blue-900 m-5">Bruschetta</h1>
          <img className="recipe-img m-5" src={brash} alt="" />
        </div>
        <div className="rcp-details">
          <h1 className="text-3xl font-bold text-blue-900 m-5">Lasagna</h1>
          <img className="recipe-img m-5" src={las} alt="" />
        </div>
        <div className="rcp-details">
          <h1 className="text-3xl font-bold text-blue-900 m-5">Panzenella</h1>
          <img className="recipe-img m-5" src={pan} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
