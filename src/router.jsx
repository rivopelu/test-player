/* eslint-disable no-unreachable */
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./main";
import VidioPlayer from "./Vidio";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/test-player" element={<VidioPlayer />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default RoutesMain;
