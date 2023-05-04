import React from "react";
import image from "../../assets/image-about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="title bg-slate-100 justify-around m-10 rounded-lg p-10">
        <div>
          <img className="rounded-lg" src={image} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-5xl font-serif font-semibold text-rose-900">
            We feel Proud <br /> We Honour Your <br />
            <span className="text-6xl font-sans font-bold text-rose-600">
              Feelings
            </span>
            <br />
            <span className="text-lg text-slate-700">
              We also provide best Recipe in here <br /> So You can contact us
              for any information <br /> Search for your favourite Recipe <br />
            </span>
            <Link
              className="btn btn-secondary w-40 text-white font-mono font-bold text-lg"
              to="/recipe"
            >
              Recipe
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
