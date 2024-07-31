import React from "react";
import "../App.css";
import image from "../assets/images/image.jpg";

function Content() {
  return (
    <>
      <div className="flex justify-center flex-col md:flex-row">
        <div className="card w-70 bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title text-lg md:text-xl">Our Mission</h2>
            <p>
              Our mission is to promote sustainability and combat climate change
              by engaging communities, supporting conservation efforts, and
              advocating for policies that protect our planet. We aim to create
              a sustainable future for all by focusing on renewable energy,
              reducing carbon emissions, and fostering environmental awareness.
            </p>
          </div>
        </div>
        <div className="card w-30 bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-lg md:text-xl">Effect</h2>
            <img className="image" src={image} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
