import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTile from "./HogTile";
import {useState} from 'react';

function App() {
	const [viewHogDetails,setviewHogDetails] = useState(null);
	
  return (
    <div className="App">
      <div>
        <Nav />
        <HogTile
          hog={hogs}
          viewHogDetails={viewHogDetails}
          setviewHogDetails={setviewHogDetails}
        />
		
      </div>
    </div>
  );
}

export default App;
