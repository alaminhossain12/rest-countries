import React from "react";
import "./Country.css";

const Country = (props) => {
  // console.log(props);
  const { name, population, area, region, flags } = props.country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h2>Country Name: {name.common}</h2>
      <p>Population: {population}</p>
      <p>
        <small>Area: {area}</small>
      </p>
      <p>Region: {region}</p>
    </div>
  );
};

export default Country;
