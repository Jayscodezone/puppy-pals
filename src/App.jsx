

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { puppyList } from "./data.js";
import './path-to-css.css';

export default function App() 
{
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("puppyList:", puppyList);
  function handleClick(puppy) {
    console.log("puppy id: ",puppy.id);
    setFeatPupId(puppy.id);
  }
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  return (

    <>
      <div className="App">
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() =>handleClick(puppy)}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>
    </>
  );
}