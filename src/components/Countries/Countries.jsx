import React, { use } from "react";
import Country from "../Country/Country";
const Countries = ({ fetchCountries }) => {
  const countries = use(fetchCountries);
  const countriesData = countries.countries;
  console.log(countriesData);
  return (
    <div>
      <h1>In the countries : {countriesData.length}</h1>
      <div className="grid grid-cols-3 gap-3 ">
        {countriesData.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
