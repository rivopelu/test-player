import React from "react";
import ReactPlayer from "react-player";
import vidio from "./vidio.mp4";
const Player = () => {
  return (
    <div>
      <ReactPlayer url={vidio} controls={true} />
    </div>
  );
};

export default Player;
