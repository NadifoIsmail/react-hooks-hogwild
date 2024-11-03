import React from "react";
import Filter from "./Filter";
import { useState } from "react";
import Form from "./Form";

export default function HogTile({ hog, viewHogDetails, setviewHogDetails }) {
  const [showGreased, setShowGreased] = useState(false);
  const [sortHog, setSortHog] = useState("");
  const [hideHog, setHideHog] = useState([]);
  const[newHogs,setNewHogs] = useState(hog);

  const addHog = (newHog) => {
    setNewHogs((previousHogs) => [...previousHogs,newHog]);
  }

  const toggleGreased = () => {
    setShowGreased(!showGreased);
  };

  const handleSort = (e) => {
    setSortHog(e.target.value);
  };
  const handleClick = () => {
    if (viewHogDetails === hog.name) {
      setviewHogDetails(null);
    } else {
      setviewHogDetails(hog.name);
    }
  };

  const hiddenHog = (hogName) => {
    setHideHog((previouslyHiddenHogs) => [...previouslyHiddenHogs, hogName]);
  };

  const hideButton = (hogName) => {
    hiddenHog(hogName);
  };
  let filterHog;
  if (showGreased) {
    filterHog = newHogs.filter((singleHog) => singleHog.greased);
  } else {
    filterHog = newHogs;
  }

  if (sortHog === "name") {
    filterHog = filterHog.sort((hogA, hogB) =>
      hogA.name.localCompare(hogB.name)
    );
  } else if (sortHog === "weight") {
    filterHog = filterHog.sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="ui grid container ui-cards" onClick={handleClick}>
      <Filter showGreased={showGreased} toggleGreased={toggleGreased} />
      <select onChange={(e) => handleSort(e)} value={sortHog}>
        <option value="">Select</option>
        <option value="name">Sort by name</option>
        <option value="weight">Sort by weight</option>
      </select>

      <Form addHog={addHog}/>
      {filterHog.map((singleHog) => {
        return (
          <div className="ui eight wide column card" key={singleHog.name}>
            <div className="image">
              <img src={singleHog.image} alt={`${singleHog.name}'s image `} />
            </div>
            <div className="content">
              <h2>Name:{singleHog.name}</h2>

              {viewHogDetails === hog.name && (
                <div>
                  <p>Specialty:{singleHog.specialty}</p>
                  <p>Greased:{singleHog.greased ? "true" : "false"}</p>
                  <p>Weight:{singleHog.weight}</p>
                  <p>Highest Medal:{singleHog["highest medal achieved"]}</p>
                </div>
              )}
              <div
                className="ui red button"
                onClick={(e) => {
                  e.stopPropagation();
                  hideButton(singleHog.name)
                }}
              >
                Hide
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
