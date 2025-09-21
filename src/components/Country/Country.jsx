import React from "react";

const Country = ({ country }) => {
  console.log(country);
  return (
    <div className="border-4 border-green-600 rounded-xl p-5 m-4">
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name : {country.name.common}</h3>
      <p>Population : {country.population.population}</p>
      <p>continent : {country.continents.continents}</p>
    </div>
  );
};

export default Country;
