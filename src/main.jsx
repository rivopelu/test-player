import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-blue-200 min-h-screen flex justify-center items-center">
      <Link to={"/vidio"}>
        <div className="bg-blue-600 text-white px-4 py-2 uppercase shadow-lg">
          Lihat Vidio
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
