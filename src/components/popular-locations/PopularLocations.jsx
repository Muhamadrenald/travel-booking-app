import Delhi from "../../../public/assets/delhi.jpg";
import Dubai from "../../../public/assets/dubai.jpg";
import Berlin from "../../../public/assets/berlin.jpg";
import Paris from "../../../public/assets/paris.jpg";
import React from "react";
import Card from "./Card";

const PopularLocations = () => {
  const data = [
    {
      image: Delhi,
      city: "Delhi",
      numOfPlaces: 3,
    },
    {
      image: Dubai,
      city: "Dubai",
      numOfPlaces: 2,
    },
    {
      image: Berlin,
      city: "Berlin",
      numOfPlaces: 1,
    },
    {
      image: Paris,
      city: "Paris",
      numOfPlaces: 4,
    },
  ];

  return (
    <div className="h-full w-full my-36">
      <div className="h-full w-5/6 mx-auto flex flex-col justify-start">
        <h5 className="text-[20px] bg-blue-500 text-white rounded-full p-4 w-max">
          Explore Top
        </h5>
        <h2 className="text-4xl text-slate-800 font-bold mt-6 mb-12">
          Popular Locations
        </h2>
        <div className="flex flex-wrap items-center gap-14">
          {data?.map((place, idx) => (
            <Card key={idx} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularLocations;
