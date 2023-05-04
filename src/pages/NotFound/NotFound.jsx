import React from "react";
import "./NotFound.css";
import notfound from "../../assets/notfound.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="nimg mt-10 mb-10">
        <img src={notfound} alt="" />
      </div>
      <div>
        <h1 className="text-6xl text-center font-bold  mt-10 mb-10 text-fuchsia-600">
          Ooops !!!
        </h1>
        <p className="text-center mb-10 mt-2 font-semibold text-rose-600 ">
          The page you are lookoing for might have been removed
        </p>
        <div className="nimg mb-10">
          <button className="btn btn-outline btn-secondary">
            <Link to="/">Go to Homepage</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
