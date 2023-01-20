import React from "react";
import { Link } from "react-router-dom";
import News from "../components/News";

const Home = () => {
  return (
    <div>
      <main className="h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
        <News />
      </main>
    </div>
  );
};

export default Home;
