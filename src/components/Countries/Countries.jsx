import React, { use, useState } from "react";
import Country from "../Country/Country";
const Countries = ({ fetchCountries }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisited = (country) => {
    console.log("handleVisited clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const handleVisitedFlags = (flag) => {
    console.log("clicked", flag);
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };
  const countries = use(fetchCountries);
  const countriesData = countries.countries;
  // console.log(countriesData);
  return (
    <div>
      <h1>In the countries : {countriesData.length}</h1>
      <h3>Total Country Visited : {visitedCountries.length}</h3>
      <h3>Visited Countries Flag : {visitedFlags.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.ccn3.ccn3} className="list-decimal">
            {country.name.common}
          </li>
        ))}
      </ol>
      <div className="flex gap-3 flex-wrap">
        {visitedFlags.map((flag, index) => (
          <img key={index} className="w-36" src={flag}></img>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 ">
        {countriesData.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisited={handleVisited}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
