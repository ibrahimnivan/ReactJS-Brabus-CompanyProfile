import engineLogo from "../assets/engine.png";
import powerLogo from "../assets/power.png";
import React from "react";

const CarCard = ({ id, name, img, description, powerTorque, engine, price }) => {
  return (
    <div className="w-80 cursor-pointer mb-10">
      <img className="brightness-95" src={`/productspage/${img}`} alt={name} />
      <h2 className="text-xl font-semibold mt-5">{name}</h2>
      <p className="text-gray-600 pb-2">{description}</p>
      <p className="text-gray-600 pb-2">{price}</p>
      <p className="text-gray-600">
        <img className="inline-block h-4 mr-2" src={engineLogo} alt="" />
        {engine}{" "}
      </p>
      <p>
        <img className="inline-block h-4 mr-2" src={powerLogo} alt="" /> {powerTorque}
      </p>
    </div>
  );
};

export default CarCard;
