import React, { useState } from "react";

const Country = ({ country, handleVisited, handleVisitedFlags }) => {
  // console.log(handleVisited);
  // console.log(country);
  const [visited, setVisited] = useState(false);

  const handleBtn = () => {
    console.log("btn clicked");

    // setVisited(true);
    //1st way ==>
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    //2nd way ==>
    // setVisited(visited ? false : true);

    //3rd way ==>
    setVisited(!visited);

    handleVisited(country);
  };
  return (
    <div
      className={`border-4 border-green-600 rounded-xl p-5 m-4 ${
        visited && "bg-green-300 "
      }`}
    >
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name : {country.name.common}</h3>
      <p>Population : {country.population.population}</p>
      <p>continent : {country.continents.continents}</p>
      <p>
        Area : {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <br />
      <button onClick={handleBtn}>{visited ? "Visited" : "Not Visited"}</button>
      <button
        onClick={() => {
          handleVisitedFlags(country?.flags?.flags?.png);
        }}
      >
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
