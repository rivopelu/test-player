import React from "react";
import ReactPlayer from "react-player";
import vidio from "./vidio.mp4";
const Player = () => {
  return (
    <div className="w-full lg:w-[60%] bg-blue-200 border p-5 shadow-lg rounded-lg">
      <ReactPlayer
        className="rounded-sm"
        url={vidio}
        controls={true}
        width="100%"
        height={"100%"}
      />
    </div>
  );
};

export default Player;
