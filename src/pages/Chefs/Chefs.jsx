/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
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
          <div>
            <p>{chef.likes}</p>
            <img src={chef.chef_picture} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
