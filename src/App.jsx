import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  const fetchCountries = fetch(
    "https://openapi.programming-hero.com/api/all"
  ).then((res) => res.json());
  return (
    <>
      <h1>React world on the go...</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Countries fetchCountries={fetchCountries}></Countries>
      </Suspense>
    </>
  );
}

export default App;
