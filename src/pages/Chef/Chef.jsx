/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Chef.css";
import { useLoaderData, useParams } from "react-router-dom";
import { FaTwitter, FaFacebook, FaGoogle } from "react-icons/fa";

const Chef = () => {
  const { id } = useParams();
  //   const { chef_name } = id;
  const chefDetails = useLoaderData();
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1 className="text-5xl font-sans font-bold text-center mt-40 text-blue-900">
        Our Best Chefs Here
      </h1>
      <div className="chef-details m-10">
        <div className="chef-data title justify-around p-10">
          <div className="chef-name ">
            <h1 className="font-serif font-bold text-3xl">
              {chefDetails.chef_name}
            </h1>
            <img
              className="chef-image m-6"
              src={chefDetails.chef_picture}
              alt=""
            />
            <p className="text-sm font-sans font-semibold">
              {chefDetails.short_biodata}
            </p>
          </div>
          <div className="chef-contact ">
            <p className="text-2xl font-sans font-bold">
              {chefDetails.chef_name}
            </p>
            <p className="text-lg font-sans font-semibold mt-10">
              Years of Experience: {chefDetails.years_of_experience}
            </p>
            <p className="text-1xl font-sans font-semibold mt-5 ">
              Recipe: {chefDetails.number_of_recipes}
            </p>
            <p className="text-1xl font-sans font-semibold mt-5 ">
              Like: {chefDetails.likes}
            </p>
            <p className="text-sm font-sans font-semibold mt-10">
              Email: {chefDetails.email}
            </p>
            <p className="text-sm font-sans font-semibold">
              Contact : {chefDetails.contact_number}
            </p>
            <div className="mt-10 icons">
              <FaTwitter className="text-2xl"></FaTwitter>
              <FaFacebook className="text-2xl"></FaFacebook>
              <FaGoogle className="text-2xl"></FaGoogle>
            </div>
          </div>
        </div>
        <div className="recipe mt-20">
          <h1 className="font-bold text-center text-6xl font-sans text-rose-500">
            Fovourite Ricipie
          </h1>
          <div className="recipe-details">
            <div className="recipes">
              <h1 className="text-3xl font-bold font-sans text-red-700 mb-10">
                {chefDetails.recipe1_name}
              </h1>
              <img
                className="recipe-img"
                src={chefDetails.recipe1_picture}
                alt=""
              />
              <p className="mt-3 font-semibold">
                <span className="text-2xl font-bold font-sans">
                  Ingredients: <br />
                </span>
                {chefDetails.ingredients1}
              </p>
              <p className="mt-3 font-semibold">
                <span className="text-2xl font-bold font-sans">
                  Cooking Method: <br />
                </span>
                {chefDetails.cooking_method1}
              </p>
            </div>
            <div className="recipes">
              <h1 className="text-3xl font-bold font-sans text-red-700 mb-10">
                {chefDetails.recipe2_name}
              </h1>
              <img
                className="recipe-img"
                src={chefDetails.recipe2_picture}
                alt=""
              />
              <p className="mt-3 font-semibold">
                <span className="text-2xl font-bold font-sans">
                  Ingredients: <br />
                </span>
                {chefDetails.ingredients2}
              </p>
              <p className="mt-3 font-semibold">
                <span className="text-2xl font-bold font-sans">
                  Cooking Method: <br />
                </span>
                {chefDetails.cooking_method2}
              </p>
            </div>
            <div className="recipes">
              <h1 className="text-3xl font-bold font-sans text-red-700 mb-10">
                {chefDetails.recipe3_name}
              </h1>
              <img
                className="recipe-img"
                src={chefDetails.recipe3_picture}
                alt=""
              />
              <p className="mt-3 font-semibold">
                <span className="text-2xl font-bold font-sans">
                  Ingredients: <br />
                </span>
                {chefDetails.ingredients3}
              </p>
              <p className="mt-3 font-semibold">
                <span className="text-2xl font-bold font-sans">
                  Cooking Method: <br />
                </span>
                {chefDetails.cooking_method3}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {show && (
          <button
            onClick={() => setShow(!show)}
            className="btn btn-secondary w-full mt-10 text-2xl"
          >
            Add to Favourite
          </button>
        )}
      </div>
    </div>
  );
};

export default Chef;
