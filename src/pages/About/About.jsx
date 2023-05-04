import React from "react";
import image from "../../assets/image-about.jpg";

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
              We also provide best Hotels in here <br /> So You can contact us
              for any information <br /> Search for your favourite Chef. <br />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
