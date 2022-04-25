import React from "react";
import Player from "./Player";
import { Link } from "react-router-dom";
const VidioPlayer = () => {
  return (
    <div className="App px-2 bg-blue-200 min-h-screen  flex flex-col justify-between items-center py-10">
      <div>
        <h1 className="text-2xl uppercase font-bold">Vidio Testing</h1>
      </div>
      <Player />
      <div>
        <Link to={"/"}>
          <div className="bg-blue-600 text-white px-4 py-2 uppercase shadow-lg">
            Back
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VidioPlayer;
